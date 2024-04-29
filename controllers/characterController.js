const asyncHandler = require("express-async-handler");

const Character = require("../models/character");

exports.check_coords = asyncHandler(async (req, res, next) => {
  const { targetBox } = req.body;
  let characterFound = false;

  const character = await Character.findById(req.params.characterID).exec();

  if (!character) {
    return res.status(404).json({ error: "Character not found" });
  }

  // check if targetBox contains corrds that match
  const correctCoords = [character.xCoord, character.yCoord];
  for (const coord of targetBox) {
    if (coord[0] === correctCoords[0] && coord[1] === correctCoords[1]) {
      characterFound = true;
      break;
    }
  }

  res.status(200).json({
    characterFound,
  });
});
