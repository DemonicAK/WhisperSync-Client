import { io } from "socket.io-client";
import React from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const SOCKET_URL = BACKEND_URL;
// export const socket = io(SOCKET_URL, {
//   // "force new connection": true,
//   // reconnectionAttempts: "Infinity",
//   // timeout: 10001,
//   withCredentials: true,
//   transports: ["websocket"],
//   allowEIO3: true,
//   reconnection: true,
//   reconnectionAttempts: 5,
//   //   rememberUpgrade:true,
//   //   secure:true,
//   // rejectUnauthorized: false,
//   // extraHeaders: {
//   //   "my-custom-header": "abcd",
//   // },
// });
// // app context



export const socket = io(SOCKET_URL, {
  withCredentials: true,
  transports: ["websocket", "polling"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  autoConnect: true
});

// Add error handling
socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error);
});


export const AppContext = React.createContext();