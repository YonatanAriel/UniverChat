import { useEffect } from "react";
import PublicChat from "../components/layout/PublicChat";
import { socket } from "../socket";

function Home() {
  useEffect(() => {
    const handleConnect = () => {
      console.log(socket.id, "user connected");
    };
    const handleConnectError = (err: Error) => {
      console.error("Connection error:", err.message);
    };

    socket.on("connect", handleConnect);
    socket.on("connect_error", handleConnectError);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("connect_error", handleConnectError);
    };
  }, []);
  return (
    <div className="flex flex-wrap w-full h-full px-12 pt-10">
      <img
        className="absolute bottom-0 left-0 bg-transparent h-2/5"
        src="\rose-Photoroom.png"
        alt=""
      />
      <PublicChat />
    </div>
  );
}

export default Home;
