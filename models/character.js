const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  game: { type: Schema.Types.ObjectId, ref: "Game" },
  xCoord: { type: Number, required: true },
  yCoord: { type: Number, required: true },
});

module.exports = mongoose.model("Character", CharacterSchema);
