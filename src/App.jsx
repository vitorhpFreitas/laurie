import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import "./App.css";
import Senha from "./componentes/Senha";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Senha />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
