import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import About from "./pages/about/About";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/about" element={<About />}>
        About
      </Route>
    </Routes>
  );
}

export default App;
