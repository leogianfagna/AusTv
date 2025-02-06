import "./NavBar.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  const [copied, setCopied] = useState(false);
  const ip = "jogar.austv.net";

  const [menuOpen, toggleMenuOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ip).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 nav-links items-gap justify-content-center flex-grow-1"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="active">
              HOME
            </Nav.Link>
            <Nav.Link href="#action2">LOJA</Nav.Link>
            <Nav.Link href="#action2">WIKI</Nav.Link>
            <NavDropdown
              title="PÁGINAS"
              id="navbarScrollingDropdown"
              onMouseEnter={() => {
                toggleMenuOpen(true);
              }}
              onMouseLeave={() => {
                toggleMenuOpen(false);
              }}
              show={menuOpen}
            >
              <NavDropdown.Item href="#action3">Novidades</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Eventos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="mobile-nav-icons">
          <Nav
            className="my-2 my-lg-0 justify-content-center flex-grow-1 items-gap"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button href="#action2" className="discord-invite"></Button>
            <Nav.Link
              href="#action2"
              className="ip-invite"
              onClick={copyToClipboard}
            >
              {copied ? "IP COPIADO!" : ip.toUpperCase()}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
