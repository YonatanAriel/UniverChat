import { useEffect, useRef } from "react";

type Props = {
  setInputText: (text: string) => void;
  sendMessage: () => void;
  inputValue: string;
};

function TextInput({ setInputText, sendMessage, inputValue }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => inputRef?.current?.focus(), []);
  return (
    <input
      value={inputValue}
      type="text"
      className={` border-t-2 border-t-black h-12 focus:outline-none w-full pl-5 pr-14 z-20`}
      onChange={(e) => setInputText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") sendMessage();
      }}
      placeholder="Whatcha you wanna say?"
      ref={inputRef}
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
