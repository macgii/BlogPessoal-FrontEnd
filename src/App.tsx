import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/home/Home";
import Navbar from "./components/statico/navbar/Navbar";
import Footer from "./components/statico/footer/Footer";
import Login from "./paginas/login/Login";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          {" "}
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
