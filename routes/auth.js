const express = require("express");
const router = express.Router();
const users = require("../controllers/user.controller.js");

// Retrieve a single user with id
router.get("/users", users.findAll);
/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Test
 *     summary: get all user.
 *     responses:
 *       200:
 *         description: Successfully returns a hello message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get("/users/:id", users.findOne);
router.post("/users/create", users.create);
router.get("/username/:name", users.findOneByName);

module.exports = router;
