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

LeaderboardSchema.virtual("time_formatted").get(function () {
  const hours = Math.floor(this.time / 3600);
  const mins = Math.floor((this.time % 3600) / 60);
  const remainingSecs = this.time % 60;
  return `${
    hours < 10 ? "0" + hours : hours
  }:${mins < 10 ? "0" + mins : mins}:${remainingSecs < 10 ? "0" + remainingSecs : remainingSecs}`;
});

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);
