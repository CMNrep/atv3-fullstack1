import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotificationIcon from "../assets/Icons/notificationIcon.svg";
import Logo from "../assets/Imgs/logo.svg";
import MenuIcon from "../assets/Icons/menuIcon.svg";

function NavBar({ Title }) {
  const [showCanvas, setShowCanvas] = useState(false);

  const handleShow = () => setShowCanvas(true);
  const handleClose = () => setShowCanvas(false);

  return (
    <>
      <Navbar style={{ backgroundColor: "#2C3E50" }} variant="dark">
        <Container>
          <Button variant="link" onClick={handleShow} className="text-white p-0 me-auto" style={{ border: "none", background: "none" }}>
            <img src={MenuIcon} alt="Menu" style={{ maxHeight: "30px" }} className="d-inline-block" />
          </Button>

          <Nav className="mx-auto">
            <Nav as="h4" className="text-white">
              {Title}
            </Nav>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link href="#sorryThisDoNotWork-heeheehe">
              <img src={NotificationIcon} alt="Notificação" style={{ marginRight: "5px", maxHeight: "30px" }} />
            </Nav.Link>
            <Navbar.Brand href="#" className="d-flex align-items-center">
              <Link to={"/"}><img src={Logo} alt="Logo" style={{ maxHeight: "40px" }} className="h-auto w-auto" /></Link>
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={showCanvas} onHide={handleClose} placement="start" backdrop={true} style={{ backgroundColor: "#2C3E50" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-light">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="text-light">Início</Nav.Link>
            <Nav.Link as={Link} to="/CadAssociados" className="text-light">Cadastrar Associado</Nav.Link>
            <Nav.Link as={Link} to="/ListarAssociados" className="text-light">Consultar Associados</Nav.Link>
            <Nav.Link as={Link} to="/" disabled className="text-light disabled">Ajuda</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;
