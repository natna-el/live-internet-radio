const { Schema, model } = require("mongoose");

const streamSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  streamid: { type: String, required: true },
  playlist: [
    {
      source: String,
      url: String,
      Date: { type: Date, default: Date.now }
    }
  ],
  activeListeners: [
    {
      user: { type: Schema.Types.ObjectId, ref: "user" },
      Date: { type: Date, default: Date.now }
    }
  ],
  chat: [
    {
      user: { type: Schema.Types.ObjectId, ref: "user" },
      msg: String,
      Date: { type: Date, default: Date.now }
    }
  ],
  Date: { type: Date, default: Date.now }
});

module.exports = model("stream", streamSchema);
