const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const chatSchema = new Schema({
  users: [{ type: ObjectId, ref: "users" }],
});

const chatModel = mongoose.model("chats", chatSchema);

module.exports = chatModel;
