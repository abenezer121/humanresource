const express = require("express");
const router = express.Router();

const TimeSheetController = require('../controllers/timesheet.controllers');



router.get("/",TimeSheetController.getAll);
router.post("/register",TimeSheetController.registerUser);
router.post("/login",TimeSheetController.loginUser);

router.get("/:_id",TimeSheetController.getSingleUser);
router.put("/:_id", TimeSheetController.updateUser);
router.delete("/:_id", TimeSheetController.deleteUser);


module.exports = router;