import { useEffect } from "react";
import { socket } from "../../socket";
import ChatBox from "../ui/ChatBox";

function PublicChat() {
  useEffect(() => {
    socket.emit("joinRoom", "publicRoom");

    return () => {
      socket.emit("leaveRoom", "publicRoom");
    };
  }, []);
  return <ChatBox messageType={"publicMessage"} />;
}

export default PublicChat;
