import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chat } from "./component/chat/Chat";
import { Home } from "./component/home/Home";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
