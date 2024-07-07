import { IoSend } from "react-icons/io5";
import Message from "../ui/Message";
import TextInput from "../ui/TxtInput";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/ContextProvider";
import { socket } from "../../socket";
import { ContextValue } from "../../types/contextValue";
import { MessageType } from "../../types/MessageType";
import { scrollToBottom } from "../../utils/scrollToBottom";
import { MessageClass } from "../../classes/Message";

type PropsType = {
  room: string;
};

function ChatBox({ room }: PropsType) {
  const { userName, userId } = useContext(Context) as ContextValue;
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputText, setInputText] = useState("");
  const msgContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    scrollToBottom(msgContainerRef);
  }, [messages]);

  useEffect(() => console.log(inputText?.trim().length > 0), [inputText]);
  useEffect(() => {
    const handleReceiveMessage = (data: MessageType) => {
      console.log("reserved - " + data);
      setMessages((prevMessages) => [...prevMessages, data]);
    };
    socket.on("receive message", handleReceiveMessage);
    return () => {
      socket.off("receive message", handleReceiveMessage);
    };
  }, []);

  const sendMessage = () => {
    if (!inputText?.trim()) return;
    const messageData = new MessageClass({
      msgText: inputText,
      userName,
      userId,
      to: room,
      isPrivate: false,
    });

    socket.emit("send message", messageData);
    setInputText("");
  };

  return (
    <div className="from-emerald-50  via-white to-red-50  bg-gradient-to-bl overflow-y-hidden shadow-lg  border-black w-full  lg:w-6/12 max-h-[80%] ml-auto border-2  rounded-lg relative ">
      <img
        className="absolute left-0 block bottom-12 h-2/5 lg:hidden "
        src="\rose.png"
        alt=""
      />
      <ul
        ref={msgContainerRef}
        className="flex flex-col max-h-full gap-1 p-1 overflow-y-auto pb-14 sm:p-6 sm:pb-14"
      >
        {messages.map((message, i) => (
          <li key={i}>
            <Message
              msgText={message.msgText}
              userName={message.userName}
              senderId={message.userId}
              timestamp={message.timestamp}
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
        <button
          disabled={!inputText?.trim()}
          className={`absolute right-0 z-30 h-full pr-4 cursor-default" `}
        >
          <IoSend
            className={`${
              inputText?.trim().length > 0 ? "cursor-pointer" : "cursor-default"
            }`}
            onClick={sendMessage}
            size={25}
          />
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
