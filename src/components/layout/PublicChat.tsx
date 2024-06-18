import { IoSend } from "react-icons/io5";
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

  return (
    <div className="from-emerald-50 -z-20 via-white to-red-50  bg-gradient-to-bl overflow-y-hidden  shadow-lg  border-black w-full  lg:w-6/12 max-h-[80%] ml-auto border-2  rounded-lg relative ">
      <img
        className="absolute left-0 block -z-10 bottom-12 h-2/5 lg:hidden"
        src="\rose.png"
        alt=""
      />
      <ul
        ref={msgContainerRef}
        className="flex flex-col max-h-full gap-1 p-1 overflow-y-auto sm:p-6 pb-14 "
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
      <div className="absolute bottom-0 left-0 right-0 flex ">
        <TextInput
          setInputText={setInputText}
          inputValue={inputText}
          sendMessage={sendMessage}
        />
        <button className="absolute right-0 z-10 h-full pr-4 cursor-auto ">
          <IoSend className="cursor-pointer" onClick={sendMessage} size={25} />
        </button>
      </div>
    </div>
  );
}

export default PublicChat;
