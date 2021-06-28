const express = require("express");
const router = express.Router();

const UserController = require('../controllers/users.controllers');



router.get("/",UserController.getAll);
router.post("/register",UserController.registerUser);
router.post("/login",UserController.loginUser);

router.get("/:_id",UserController.getSingleUser);
router.put("/:_id", UserController.updateUser);
router.delete("/:_id", UserController.deleteUser);


module.exports = router;