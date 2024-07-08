import { useEffect, useLayoutEffect, useState } from "react";
import { socket } from "../../socket";
import ChatBox from "../ui/ChatBox";
import api from "../../services/baseAxiosFunction";

type ApiResponse = {
  roomId?: number;
};

function LoggedInChat() {
  const [roomId, setRoomId] = useState<number | null>(null);

  const saveRoomInDB = async (): Promise<ApiResponse> => {
    const roomId = await api.post("/chat-rooms/add-chat-room", {
      name: "loggedInPublic",
    });
    return roomId as ApiResponse;
  };

  useLayoutEffect(() => {
    saveRoomInDB().then((data) => setRoomId(data?.roomId as number));
  }, []);

  useEffect(() => {
    if (roomId) {
      socket.emit("joinRoom", roomId);
    }
    return () => {
      socket.emit("leaveRoom", roomId);
    };
  }, [roomId]);

  return <ChatBox roomId={roomId} />;
}

export default LoggedInChat;
