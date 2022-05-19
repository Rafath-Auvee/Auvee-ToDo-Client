import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Shared/Navbar.js"
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Todo/Home.js"
import Update from "./components/Todo/Update.js"
import Insert from "./components/Todo/Insert.js"
import Login from "./components/Authentication/Login.js"
import SignUp from "./components/Authentication/SignUp.js"
import Footer from "./components/Shared/Footer.js"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="update" element={<Update />} />
        <Route path="insert" element={<Insert />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
