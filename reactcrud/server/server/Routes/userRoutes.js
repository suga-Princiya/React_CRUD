const express = require("express");
const router = express.Router();
const UserController = require("../Controller/UserController.js");

// Create a new user
router.post("/", UserController.createUser);

// Read all users
router.get("/", UserController.getAllUsers);

// Read a single user by ID
router.get("/:id", UserController.getUserById);

// Update a user by ID
router.put("/:id", UserController.updateUser);

// Delete a user by ID
router.delete("/:id", UserController.deleteUser);

module.exports = router;
