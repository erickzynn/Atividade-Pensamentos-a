const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

router.post("/users", UserController.createUsers);
router.get("/users", UserController.findAllUsers);
router.get("/users/:id", UserController.findUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;