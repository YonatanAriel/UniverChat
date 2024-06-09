type Props = {
  setInputText: (text: string) => void;
};

function TextInput({ setInputText }: Props) {
  return (
    <input
      type="text"
      className="border-black border-2"
      onChange={(e) => setInputText(e.target.value)}
    />
  );
}

export default TextInput;

// src/components/Chat.tsx
// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io(); // Connect to the server (same domain)

// function Chat() {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [inputText, setInputText] = useState('');

//   useEffect(() => {
//     // Listen for incoming messages
//     socket.on('message', (data: string) => {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });
//   }, []);

//   const handleSendMessage = () => {
//     if (inputText.trim()) {
//       socket.emit('message', inputText);
//       setInputText('');
//     }
//   };

//   return (
//     <div>
//       <ul>
//         {messages.map((msg, index) => (
//           <li key={index}>{msg}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//       />
//       <button onClick={handleSendMessage}>Send</button>
//     </div>
//   );
// }

// export default Chat;
