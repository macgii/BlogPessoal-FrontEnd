import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/home/Home";
import Navbar from "./components/estatico/navbar/Navbar";
import Footer from "./components/estatico/footer/Footer";
import Login from "./paginas/login/Login";
import "./App.css";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTema from "./components/tema/listatema/ListaTema";
import ListaPostagem from "./components/postagem/listapostagem/ListaPostagem";
import CadastroPostagem from "./components/postagem/cadastroPostagem/CadastroPostagem";
import CadastroTema from "./components/tema/cadastroTema/CadastroTema";
import DeletarPostagem from "./components/postagem/deletarPostagem/deletarPostagem";
import DeletarTema from "./components/tema/deletarTema/DeletarTema";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          {" "}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/postagens" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPostagem />}/>
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />}/>
          <Route path="/formularioTema" element={<CadastroTema />}/>
          <Route path="/formularioTema/:id" element={<CadastroTema />}/>
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />}/>
          <Route path="/deletarTema/:id" element={<DeletarTema />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
