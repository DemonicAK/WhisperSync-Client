import { io } from "socket.io-client";
import React from "react";
const SOCKET_URL = import.meta.env.VITE_BACKEND_URL;


export const socket = io(SOCKET_URL, {
  withCredentials: true,
  transports: ["websocket", "polling"],
  reconnection: true,
  reconnectionAttempts: 20,
  reconnectionDelay: 1000,
  autoConnect: true
});

// Add error handling
socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error);
});


socket.on("connect", () => {
  console.log("Connected to socket server");
});

export const AppContext = React.createContext();