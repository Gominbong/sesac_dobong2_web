

const User = function (sequelize, DataTypes) {
  return sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userid: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    pw: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  });
};

module.exports = User;
