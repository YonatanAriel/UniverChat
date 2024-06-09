import PublicChat from "../components/layout/PublicChat";
import { socket } from "../socket";

function Home() {
  socket.on("connect", () => {
    console.log(socket.id, "user connected");
  });
  socket.on("connect_error", (err) => {
    console.error("Connection error:", err.message);
  });
  return (
    <>
      <PublicChat />
    </>
  );
}

export default Home;
