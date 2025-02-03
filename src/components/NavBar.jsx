import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [copied, setCopied] = useState(false);
  const ip = "jogar.austv.net";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ip).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <nav style={{ marginTop: "1rem" }} className="container px-4">
      <div className="nav-links">
        <a className="active">HOME</a>
        <a href="https://loja.austv.net/">LOJA</a>
        <a href="https://wiki.austv.net/">WIKI</a>
     
        {/* Dropdown funcional com hover */}
        <div className="dropdown-container">
          <a className="dropdown-toggle">PÁGINAS</a>
          <div className="dropdown-menu">
            <a href="#novidades">Novidades</a>
            <a href="#eventos">Eventos</a>
          </div>
        </div>

      </div>
      <div>
        <a
          className="discord-invite"
          href="https://discord.com/invite/jdVxeGb"
        ></a>
        <a
          className="ip-invite"
          onClick={copyToClipboard}
          style={{ cursor: "pointer" }}
        >
          {copied ? "IP COPIADO!" : ip.toUpperCase()}{" "}
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
