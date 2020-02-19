const { Schema, model } = require("mongoose");

const radioSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  playlist: Array,
  listeners: Array,
  chat: {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    msg: String,
    Date: { type: Date, default: Date.now }
  },
  Date: { type: Date, default: Date.now }
});

module.exports = model("radio", radioSchema);
