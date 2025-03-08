import React, { useState } from "react";

function Senha() {
  const [valor, setValor] = useState("");
  const handleInput = (event) => {
    setValor(event.target.value);
  };

  const handleSenha = () => {
    if (valor === "1414") {
      window.location.href = "https://laurie-tau.vercel.app";
    } else {
      alert("Senha incorreta");
    }
  };
  console.log(handleSenha);
  return (
    <div className="senha">
      <div className="container1">
        <div className="nav-bar">
          <a href="/">Chat</a>
          <div className="close">
            <div className="line one"></div>
            <div className="line two"></div>
          </div>
        </div>
        <div className="messages-area">
          <div className="message one">digite quantos</div>
          <div className="message two">anos,meses e dias</div>
          <div className="message three">temos de namoro</div>
          <div className="message four">numeros juntos e sem espaços </div>
          <div className="message five">{valor}</div>
          <div className="message six"></div>
        </div>
        <div className="sender-area">
          <div className="input-place">
            <input
              placeholder="Send a message."
              className="send-input"
              type="password"
              value={valor}
              onChange={handleInput}
            />
          </div>
          <button
            className="btn-class-name"
            id="botaovermelho"
            onClick={handleSenha}
          >
            <span className="back"></span>
            <span className="front"></span>
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
}
export default Senha;
