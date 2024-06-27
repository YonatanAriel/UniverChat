import { io } from "socket.io-client";

// const URL = "http://localhost:4000" || "http://localhost:4001";
const URL = "http://localhost:4000";

export const socket = io(URL, { secure: true });
