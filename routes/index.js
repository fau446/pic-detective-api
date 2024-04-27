const express = require("express");
const router = express.Router();

const gameController = require("../controllers/gameController");

// GET home page.
router.get("/", gameController.fetch_games);

// GET game details and characters at the beginning of the game

// POST when user chooses a dropdown option

// POST when user finishes the game to upload results to leaderboard

module.exports = router;
