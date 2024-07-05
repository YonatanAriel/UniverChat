import { useEffect } from "react";
import { socket } from "../../socket";
import ChatBox from "../ui/ChatBox";

function LoggedInChat() {
  useEffect(() => {
    socket.emit("joinRoom", "loggedInPublic");
    return () => {
      socket.emit("leaveRoom", "loggedInPublic");
    };
  }, []);

  return <ChatBox room="loggedInPublic" />;
}

export default LoggedInChat;
