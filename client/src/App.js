import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Refer from "./pages/refer/Refer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/referandearn" element={<Refer />} />
      </Routes>
    </div>
  );
}

export default App;
