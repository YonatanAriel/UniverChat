import { useEffect, useLayoutEffect, useState } from "react";
import { socket } from "../../socket";
import ChatBox from "../ui/ChatBox";
import api from "../../services/baseAxiosFunction";

type ApiResponse = {
  roomId?: number;
};

function LoggedInChat() {
  const roomName = "loggedInPublic";
  const [roomId, setRoomId] = useState<number | null>(null);

  const saveRoomInDB = async (): Promise<ApiResponse> => {
    const roomId = await api.post("/chat-rooms/add-chat-room", {
      name: roomName,
    });
    return roomId as ApiResponse;
  };

  useLayoutEffect(() => {
    saveRoomInDB().then((data) => setRoomId(data?.roomId as number));
  }, []);

  useEffect(() => {
    socket.emit("joinRoom", roomName);
    return () => {
      socket.emit("leaveRoom", roomName);
    };
  }, []);

  return <ChatBox roomId={roomId} />;
}

export default LoggedInChat;
