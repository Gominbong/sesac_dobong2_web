// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");
router.get("/user", controller.getUser);
router.get("/user/signup", controller.getUserSignup);
router.post("/user/signup", controller.postUserSignup);
router.get("/user/signin", controller.getUserSignin);
router.post("/user/signin", controller.postUserSignin);
router.post("/user/profile", controller.postUserProfile);
router.patch("/user/profile/edit", controller.patchUserProfile);
router.delete("/user/profile/delete", controller.deleteUserProfile);
module.exports = router;
