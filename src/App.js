import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import CheckIn from "./pages/CheckIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/check-in" element={<CheckIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
