import { useEffect } from "react";
import { socket } from "../socket";
import PublicChat from "../components/layout/PublicChat";

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
    <div className="flex flex-wrap w-full h-full px-2 pt-10 sm:px-12 ">
      <img
        className="absolute bottom-0 left-0 hidden bg-transparent h-2/5 lg:block"
        src="\rose.png"
        alt=""
      />
      <PublicChat />
    </div>
  );
}

export default Home;
