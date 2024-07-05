import { useEffect } from "react";
import { socket } from "../../socket";
import ChatBox from "../ui/ChatBox";

function PublicChat() {
  useEffect(() => {
    socket.emit("joinRoom", "public");

    return () => {
      socket.emit("leaveRoom", "public");
    };
  }, []);
  return <ChatBox room={"public"} />;
}

export default PublicChat;
