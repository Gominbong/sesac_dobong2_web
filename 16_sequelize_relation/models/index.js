"use strict";

const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.js")["devel"];
const db = {};
// (1) Sequelize 클래스를 통해서 sequelize 객체를 생성

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// (2) 모델을 불러오면서 인자로 정보 전달

const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

// (3) 모델간 관계 설정
// 3-1 Player:Profile = 1:1 관계
PlayerModel.hasOne(ProfileModel, {
  onDelete: "cascade",
  onUpdate: "cascade",
  foreignKey: "player_id",
});
ProfileModel.belongsTo(PlayerModel, {
  foreignKey: "player_id",
});

// 3-2 Team:Player = 1:N 관계
TeamModel.hasMany(PlayerModel, {
  foreignKey: "teamid",
  sourcekey: "team_id", // sourcekey는 TeamModel의 컬럼명
});
PlayerModel.belongsTo(TeamModel, {
  foreignKey: "teamid",
  sourcekey: "team_id",
});
// 3-3 Team:Game = N:M 관계
// Team과 Game은 N:M 관계이므로 TeamGame 모델을 통해 관계 설정
// TeamGame 모델은 Team과 Game의 id를 참조하는 컬럼을 가짐
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id",
});

GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id",
});

// db 객체에 모델을 추가
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Game = GameModel;
db.Team = TeamModel;
db.TeamGame = TeamGameModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
