import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import { AuthRouters } from "./Router/AuthRouters.js";
import { connectDB } from "./DB/index.js";
import { ResHandler } from "./Utils/ResponseHandler/ResHandler.js";
import roomModel from "./DB/Model/roomModel.js";
import messageModel from "./DB/Model/messageModel.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const API_PreFix = "/api/v1";
app.use(API_PreFix, AuthRouters);

connectDB();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  let foundRoomData;
  socket.on("join_room", async (roomId) => {
    console.log("joinroom");
    socket.join(roomId.toString());
    foundRoomData = await roomModel
      .findOne({
        _id: roomId,
      })
      .populate({ path: "messages" });

    // io.in(roomId.toString()).emit("receive_message", foundRoomData.messages);
    io.in(roomId.toString()).emit("update_messages", foundRoomData.messages);
  });

  socket.on("send_message", async (data) => {
    const messageData = await messageModel.create(data);
    let roomdata = await roomModel.findOne({ _id: data.room }).populate({
      path: "messages",
    });
    const room = await roomModel.updateOne(
      { _id: data.room },
      {
        messages: [...roomdata.messages, messageData._id],
      }
    );
    foundRoomData = await roomModel.findOne({ _id: data.room }).populate({
      path: "messages",
    });
    io.in(data.room.toString()).emit("update_messages", foundRoomData.messages);
  });

  // socket.on("receive_message", async (roomId) => {
  //   const messageData = await roomModel.findOne(roomId).populate("message");
  //   console.log(messageData);
  // });

  // socket.on("messages_seen", async (message) => {
  //   await messageModel.findOneAndUpdate({ _id: message._id }, { isSeen: true });

  //   foundRoomData = await getRoomData(message.room);

  //   io.in(message.room.toString()).emit(
  //     "receive_message",
  //     foundRoomData.messages
  //   );
  // });
  // socket.on("add-user", (userId) => {
  //   global.onlineUsers.set(userId, socket.id);
  // });

  // socket.on("send-msg", (data) => {
  //   const sendUserSocket = global.onlineUsers.get(data.to);
  //   if (sendUserSocket) {
  //     socket.to(sendUserSocket).emit("msg-recieved", data.message);
  //   }
  // });
});

const port = process.env.PORT || 3050;

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

app.use(ResHandler);
