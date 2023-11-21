const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    musicians: {
      type: Object,
    },
    albums: {
      type: Array,
    },
    popularSongs: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true }
);

groupSchema.post("save", (err, data, next) => {
  err.status = 400;
  next();
});

const Group = mongoose.model("groups", groupSchema);

module.exports = Group;
