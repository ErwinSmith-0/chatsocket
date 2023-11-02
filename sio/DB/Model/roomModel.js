import mongoose, { Schema } from "mongoose";

const RoomSchema = new Schema(
  {
    // users: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "user",
    //   },
    // ],
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },

    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const roomModel = mongoose.model("room", RoomSchema);
export default roomModel;
