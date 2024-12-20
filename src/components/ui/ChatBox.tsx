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
  // room: string;
  roomId: number | null;
};

function ChatBox({ roomId }: PropsType) {
  const { userName, userId, isUserLoggedIn } = useContext(
    Context
  ) as ContextValue;
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputText, setInputText] = useState("");
  const msgContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    scrollToBottom(msgContainerRef);
  }, [messages]);

  useEffect(() => {
    if (roomId) {
      const handlePrevMessages = (previousMessages: MessageType[]) => {
        setMessages(previousMessages);
      };

      socket.on("previous messages", handlePrevMessages);

      return () => {
        socket.off("previous messages", handlePrevMessages);
      };
    }
  }, [roomId]);

  useEffect(() => {
    const handleReceiveMessage = (data: MessageType) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };
    socket.on("receive message", handleReceiveMessage);
    return () => {
      socket.off("receive message", handleReceiveMessage);
    };
  }, []);

  useEffect(() => console.log(messages), [messages]);

  const sendMessage = () => {
    if (!inputText?.trim()) return;

    const messageData = new MessageClass({
      msgText: inputText,
      userName,
      userId,
      // to: room,
      chatRoomId: roomId,
      isPrivate: false,
      isLoggedIn: isUserLoggedIn,
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
        {messages?.map((message, i) => (
          <li key={i}>
            <Message
              userImg={message.userImg}
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
