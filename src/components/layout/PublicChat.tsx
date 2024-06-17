import Message from "../ui/Message";
import TextInput from "../ui/TxtInput";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/ContextProvider";
import { socket } from "../../socket";
import { getDateData } from "../../utils/getDateData";
import { ContextValue } from "../../types/contextValue";
import { MessageType } from "../../types/MessageType";
import { scrollToBottom } from "../../utils/scrollToBottom";

function PublicChat() {
  const { name, userId } = useContext(Context) as ContextValue;
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputText, setInputText] = useState("");
  const msgContainerRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    scrollToBottom(msgContainerRef);
  }, [messages]);

  useEffect(() => {
    const handleReceiveMessage = (data: MessageType) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };
    socket.on("receiveMessage", handleReceiveMessage);
    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, []);

  const sendMessage = () => {
    if (!inputText?.trim()) return;
    const messageData: MessageType = {
      text: inputText,
      name,
      messageTime: getDateData(),
      senderId: userId,
    };
    socket.emit("publicMessage", messageData);
    setInputText("");
  };

  useEffect(() => console.log(messages), [messages]);

  return (
    <div className=" bg-gradient-to-bl overflow-y-hidden shadow-lg from-emerald-50  via-white to-red-50  border-black w-6/12 max-h-[80%] ml-auto border-2  rounded-lg relative ">
      <ul
        ref={msgContainerRef}
        // style={{ scrollbarColor: "black transparent", scrollbarWidth: "thin" }}
        className="flex-col gap-1  flex overflow-y-auto  max-h-full pb-14 p-6 "
      >
        {messages.map((message, i) => (
          <li key={i}>
            <Message
              text={message.text}
              name={message.name}
              messageTime={message.messageTime}
              senderId={message.senderId}
            />
          </li>
        ))}
      </ul>
      <div className="bg-green-200 absolute right-0 left-0 bottom-0 flex ">
        <TextInput
          setInputText={setInputText}
          inputValue={inputText}
          sendMessage={sendMessage}
        />
        <button
          className="bg-rose-300 h-4 w-4 absolute right-8 z-10"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default PublicChat;
