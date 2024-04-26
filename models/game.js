const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: { type: String, required: true },
  characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
});

module.exports = mongoose.model("Game", GameSchema);
