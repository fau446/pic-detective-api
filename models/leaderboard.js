const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const LeaderboardSchema = new Schema({
  name: { type: String, required: true },
  game: { type: Schema.Types.ObjectId, ref: "Game" },
  time: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

LeaderboardSchema.virtual("date_formatted").get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);
