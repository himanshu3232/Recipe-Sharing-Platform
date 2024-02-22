import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Links from "./Links";
import User from "../user/User";

export default function NavBar() {
  return (
    <>
      <Router>
        <Links />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User/>} />
        </Routes>
      </Router>
    </>
  );
}
