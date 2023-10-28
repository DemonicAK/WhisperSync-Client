import { io } from "socket.io-client";
import React from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const SOCKET_URL = BACKEND_URL;
export const socket = io(SOCKET_URL, {
  // "force new connection": true,
  // reconnectionAttempts: "Infinity",
  // timeout: 10001,
  transports: ["websocket"],
  allowEIO3: true,
  //   rememberUpgrade:true,
  //   secure:true,
  // rejectUnauthorized: false,
  // extraHeaders: {
  //   "my-custom-header": "abcd",
  // },
});
// app context
export const AppContext = React.createContext();
