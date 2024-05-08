const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const Game = require("../models/game");
const Leaderboard = require("../models/leaderboard");

exports.fetch_scores = asyncHandler(async (req, res, next) => {
  const gameID = req.params.gameID;
  const scores = await Leaderboard.find({ game: gameID })
    .sort({ time: 1 })
    .exec();

  const game = await Game.findById(gameID).select({ name: 1 }).exec();

  const scoresWithVirtuals = scores.map((score) =>
    score.toJSON({ virtuals: true })
  );

  res.status(200).json({
    scores: scoresWithVirtuals,
    gameName: game.name,
  });
});

exports.submit_score = [
  body("name", "Name cannot be blank!").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const gameID = req.params.gameID;
    const { name, time } = req.body;

    const score = new Leaderboard({
      name,
      game: gameID,
      time,
    });

    await score.save();

    res.status(200).json({
      message: "Score succesfully saved!",
    });
  }),
];
