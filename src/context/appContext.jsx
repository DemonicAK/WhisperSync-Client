import { io } from "socket.io-client";
import React, { createContext, useEffect, useState } from "react";

const SOCKET_URL = "http://localhost:5000";

//a
export const socket = io(SOCKET_URL);
export const AppContext = createContext();
