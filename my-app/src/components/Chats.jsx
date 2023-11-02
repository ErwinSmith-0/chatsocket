"use client";
import React, { useEffect, useState } from "react";
import { socket } from "../../lib/socket";

const Chats = (props) => {
  const { sender, receiver } = props;
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [rom, setRom] = useState();

  useEffect(() => {
    socket.on("update_messages", (messages) => {
      setMessages(messages);
    });
    return () => socket.off("update_messages");
  }, []);

  useEffect(() => {
    const Rooming = async () => {
      const getroom = async () => {
        const res = await fetch("http://localhost:3050/api/v1/room", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            //   sender: params.slug[0],
            //   receiver: params.slug[1],
            sender: sender,
            receiver: receiver,
          }),
        });
        return res.json();
      };
      const room = await getroom();
      setRom(room.data._id);
      socket.emit("join_room", room.data._id);
    };
    Rooming();
  }, []);

  const handleNewMessageSubmit = (e, msg) => {
    e.preventDefault();
    if (msg.length > 0) {
      const data = {
        text: msg,
        sender: sender,
        receiver: receiver,
        room: rom,
      };
      socket.emit("send_message", data);
      // socket.on("update_messages", (messages) => {

      //   setMessages(messages);
      // });
    }
  };

  return (
    <div>
      <div className="max-w-lg mx-auto mt-10">
        <div className="flex justify-between">
          <h1>UserName: {sender}</h1>
          <h1>Send To: {receiver}</h1>
        </div>
        <hr />

        <div>
          <h1 className="flex justify-center mt-2">MESSAGES</h1>
          <ul>
            {messages.map((e) => (
              <li key={e._id}>{e.text}</li>
            ))}
          </ul>
          {/* {messages.map((e) => (
            <p key={e}>e</p>
          ))} */}
          {/* {"messages[0]._id"} */}
          {/* {messages[0]._id} */}
          {/* {messages} */}
        </div>

        <div className="flex justify-center">
          <div className="absolute bottom-10">
            <div className="space-x-4">
              <input
                className="text-black rounded-md"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <label className="bg-blue-500 rounded-md pl-4 pr-4 p-1.5">
                +
                <input
                  className="w-full hidden h-full rounded text-gray-950"
                  type="file"
                  name="attachment"
                  placeholder="Attachment"
                />
              </label>
              {/* <button className="bg-blue-500 rounded-md pl-4 pr-4">+</button> */}
              <button
                onClick={(e) => handleNewMessageSubmit(e, msg)}
                className="bg-blue-500 rounded-md pl-4 pr-4 p-0.5"
              >
                send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
