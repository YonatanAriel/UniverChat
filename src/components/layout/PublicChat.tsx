import { useEffect } from "react";
import { socket } from "../../socket";
import ChatBox from "../ui/ChatBox";

function PublicChat() {
  const roomId = "9999999999999";
  useEffect(() => {
    socket.emit("joinRoom", roomId);

    return () => {
      socket.emit("leaveRoom", roomId);
    };
  }, [roomId]);
  return <ChatBox roomId={Number(roomId)} />;
}

export default PublicChat;
