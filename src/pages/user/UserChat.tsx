import { useEffect, useState } from "react";
import io from "socket.io-client";
// import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const socket = io("https://gig-x-server.onrender.com"); // Update with your backend URL

interface Message {
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: string;
}

const Chat = ({freelancer, senderId, receiverId } : any) => {
    // const {senderId,receiverId} = useParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");
    console.log(messages)
    console.log(senderId,receiverId)

  useEffect(() => {
    axios.get(`https://gig-x-server.onrender.com/api/chat/${senderId}/${receiverId}`)
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
  },[senderId,receiverId]);

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
         <div className="lg:w-[30%] w-[90%] p-4 h-[70%] glass rounded-lg shadow-md">
            <div className="h-[15%] flex gap-3 items-center">
                <img src={freelancer.profileImg} alt="profile" className="h-14 w-14 rounded-full"/>
                <div className="flex flex-col">
                    <span className="font-bold">{freelancer.name}</span>
                    <span className="text-slate-400 text-sm ">Online</span>
                </div>
                <div>

                </div>
            </div>
      <div className="h-[70%] overflow-y-auto flex flex-col space-y-2 p-2 scroll-icon-none">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg w-fit max-w-[70%] ${
              msg.senderId === senderId
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-300 text-gray-800 self-start"
            }`}
          >
            <p>{msg.message}</p>
            <p className="text-xs">{moment(msg.timestamp).format('hh:mm a')}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4 h-[10%]">
        <input
          type="text"
          className="flex-1 p-2 focus:outline-none bg-transparent border rounded-lg text-white"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="ml-2 bg-yellow-500 text-black px-4 py-2 rounded-lg"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
