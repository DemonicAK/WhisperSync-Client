import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Chat, Login, Signup } from "./pages";
import { Navigation } from "./components";
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;