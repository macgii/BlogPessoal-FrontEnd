import React from "react";
import { Grid } from "@material-ui/core";
import Home from "./paginas/home/Home";
import Navbar from "./components/statico/navbar/Navbar";
import Footer from "./components/statico/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
