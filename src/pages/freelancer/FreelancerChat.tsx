// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import axiosInstance from "../../api/axiosInstance";

// const socket = io("http://localhost:5000");

// interface IMessage {
//   sender: string;
//   receiver: string;
//   content: string;
//   createdAt?: string;
// }

// const sender = "6788e1770cd2e8868ca44637"; // Example sender ID
// const receiver = "677cf6f93107d6c2f5f32ac5"; // Example receiver ID

const FreelancerChat = () => {
//   const [messages, setMessages] = useState<IMessage[]>([]);
//   const [message, setMessage] = useState("");

//   const room = [sender, receiver].sort().join("_");

//   // Join the room and fetch chat history
//   useEffect(() => {
//     socket.emit("joinRoom", { room });

//     const fetchMessages = async () => {
//       try {
//         const { data } = await axiosInstance.get(`/messages/${sender}/${receiver}`);
//         setMessages(data); // Load chat history
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     };

//     fetchMessages();

//     // Listen for incoming messages in real-time
//     socket.on("message", (data: IMessage) => {
//       setMessages((prev) => [...prev, data]);
//     });

//     return () => {
//       socket.off("message"); // Clean up the listener
//     };
//   }, [room]);

//   const sendMessage = async () => {
//     if (message.trim()) {
//       const newMessage: IMessage = {
//         sender,
//         receiver,
//         content: message,
//       };

//       try {
//         // Emit the message to the server
//         socket.emit("chatMessage", { room, ...newMessage });

//         // Save the message in the database
//         await axiosInstance.post("/post-message", newMessage);

//         // Add the message to the state for instant display
//         setMessages((prev) => [...prev, newMessage]);

//         // Clear the input field
//         setMessage("");
//       } catch (error) {
//         console.error("Error sending message:", error);
//       }
//     }
//   };

//   return (
//     <div className="chat-container pt-64">
//       <div className="messages h-96 overflow-y-auto bg-gray-100 p-4 rounded">
//         {messages.map((msg, index) => (
//           <p
//             key={index}
//             className={`message ${
//               msg.sender === sender
//                 ? "bg-blue-500 text-white text-right"
//                 : "bg-gray-200 text-left"
//             } p-2 rounded mb-2`}
//           >
//             <strong>{msg.sender === sender ? "You" : "Other"}:</strong> {msg.content}
//           </p>
//         ))}
//       </div>
//       <div className="message-input mt-4 flex">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="flex-1 p-2 border rounded-l"
//         />
//         <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-r">
//           Send
//         </button>
//       </div>
//     </div>
//   );
};

export default FreelancerChat;
