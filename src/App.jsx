import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { Home, Chat, Login, Signup } from "./pages";
import { Navigation } from "./components";
import { useState } from "react";
import { AppContext,socket } from "./context/appContext";
function App() {
  const [rooms, setRooms] = useState([]);
  const [currentRomms, setCurrentRomms] = useState([]);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [pvtMemberMsg, setPvtMemberMsg] = useState({});
  const [newMessages, setNewMessages] = useState({});

  const user = useSelector((state) => state.user);

  return (
    <AppContext.Provider value={{
      socket,
      currentRomms,setCurrentRomms,
      rooms,setRooms,
      members,setMembers,
      messages,setMessages,
      pvtMemberMsg,setPvtMemberMsg,
      newMessages,setNewMessages
    }}>

    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {!user && (
            <>
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
            </>
          )}
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
          </AppContext.Provider>
  );
}

export default App;
