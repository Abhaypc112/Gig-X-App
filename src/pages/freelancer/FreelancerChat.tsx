import { useEffect, useState } from "react";
import io from "socket.io-client";
// import { useParams } from "react-router-dom";
import axios from "axios";

const socket = io("https://gig-x-server.onrender.com"); // Update with your backend URL

interface Message {
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: string;
}

const Chat = () => {
    // const {senderId,receiverId} = useParams();
    const receiverId = "6791f7627af018b585a8eab6";
    const senderId = "677cda9eb874503824b65793"
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    axios.get(`https://gig-x-server.onrender.com/api/chat/${receiverId}/${senderId}`)
      .then((res) => setMessages(res.data));

    socket.on("receiveMessage", (message: Message) => {
      if (
        (message.senderId === senderId && message.receiverId === receiverId) ||
        (message.senderId === receiverId && message.receiverId === senderId)
      ) {
        setMessages((prev) => [...prev, message]);
      }
    });

    return () => {
      socket.off("receiveMessage");
    };
  },);

  const sendMessage = () => {
    console.log(senderId,receiverId)
    if (newMessage.trim()) {
      socket.emit("sendMessage", { senderId, receiverId, message: newMessage });
      axios.post(`https://gig-x-server.onrender.com/api/chat/save-message`,{senderId, receiverId, message: newMessage })
      .then((res) => console.log(res.data));
      setNewMessage("");
    }
  };

  return (
    <div className="w-[100%] h-screen flex">
         <div className="lg:w-[30%] w-[90%] mx-auto p-4 h-[65%] bg-gray-100 rounded-lg shadow-md mt-[9rem]">
      <div className="h-96 overflow-y-auto flex flex-col space-y-2 p-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg w-fit max-w-[70%] ${
              msg.senderId === senderId
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-300 text-gray-800 self-start"
            }`}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg text-black"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
    </div>
  );
};

export default Chat;
