import { useEffect, useState } from "react";
import TextInput from "../ui/TxtInput";
import { socket } from "../../socket";

type Message = {
  text: string;
  randomId: number;
};

function PublicChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    const handleReceiveMessage = (data: Message) => {
      console.log(data.randomId);
      setMessages((prevMessages) => [...prevMessages, data]);
    };
    socket.on("receiveMessage", handleReceiveMessage);
    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, []);
  const sendMessage = () => {
    if (!inputText?.trim()) return;
    socket.emit("publicMessage", { text: inputText, randomId: Math.random() });
    setInputText("");
  };
  useEffect(() => console.log(messages), [messages]);

  return (
    <div className="p-10 border-black border-2 rounder-lg">
      <ul className="bg-green-300">
        {messages.map((m, i) => (
          <li key={i}>{m.text}</li>
        ))}
      </ul>
      <TextInput setInputText={setInputText} />
      <button className="bg-rose-300 h-4 w-4" onClick={sendMessage}></button>
    </div>
  );
}

export default PublicChat;
