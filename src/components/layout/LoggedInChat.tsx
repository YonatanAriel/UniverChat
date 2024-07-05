import { useEffect } from "react";
import { socket } from "../../socket";
import ChatBox from "../ui/ChatBox";

function LoggedInChat() {
  useEffect(() => {
    socket.emit("joinRoom", "loggedInRoom");
    return () => {
      socket.emit("leaveRoom", "loggedInRoom");
    };
  }, []);

  return <ChatBox messageType="loggedInPublicMessage" />;
}

export default LoggedInChat;
