import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}