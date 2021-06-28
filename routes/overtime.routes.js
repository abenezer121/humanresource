const express = require("express");
const router = express.Router();

const Overtimecontroller = require('../controllers/overtime.controllers');



router.get("/",Overtimecontroller.getAll);
router.post("/register",Overtimecontroller.registerUser);
router.post("/login",Overtimecontroller.loginUser);

router.get("/:_id",Overtimecontroller.getSingleUser);
router.put("/:_id", Overtimecontroller.updateUser);
router.delete("/:_id", Overtimecontroller.deleteUser);


module.exports = router;