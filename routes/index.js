const express = require("express");
const router = express.Router();

const gameController = require("../controllers/gameController");
const characterController = require("../controllers/characterController");
const leaderboardController = require("../controllers/leaderboardController");

// GET home page.
router.get("/", gameController.fetch_games);

// GET game details and characters at the beginning of the game
router.get("/game/:gameID", gameController.game_details);

// POST when user chooses a dropdown option
router.post("/character/:characterID", characterController.check_coords);

// GET to fetch leaderboard for desired game
router.get("/leaderboard/:gameID", leaderboardController.fetch_scores);

// POST when user finishes the game to upload results to leaderboard

module.exports = router;
