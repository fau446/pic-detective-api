const asyncHandler = require("express-async-handler");

const Leaderboard = require("../models/leaderboard");

exports.fetch_scores = asyncHandler(async (req, res, next) => {
  const gameID = req.params.gameID;
  const scores = await Leaderboard.find({ game: gameID })
    .sort({ time: 1 })
    .exec();

  const scoresWithVirtuals = scores.map((score) =>
    score.toJSON({ virtuals: true })
  );

  res.status(200).json({
    scores: scoresWithVirtuals,
  });
});
