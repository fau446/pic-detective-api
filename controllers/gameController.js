const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const Game = require("../models/game");
const Character = require("../models/character");

exports.fetch_games = asyncHandler(async (req, res, next) => {
  const games = await Game.find().select({ characters: 0 }).exec();

  res.status(200).json({
    games,
  });
});
