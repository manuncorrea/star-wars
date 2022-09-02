import { useState } from "react";

import { Link } from "react-router-dom";
import { Button, Container, Modal, Nav, Navbar, NavItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImg from '../../assets/logo.svg';

export function Header() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleClose = () => setIsVisibleModal(false);
  const handleOpenModal = () => setIsVisibleModal(true);


  return (
    <>
      <Navbar style={{ background: '#0e0c1a', height: '5rem' }} variant="dark">
        <Container >
          <Navbar.Collapse>
            <Navbar.Brand href="#home">
              <img src={logoImg} alt="" />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <NavItem>
                <Nav.Link as={Link} to="/" >Personages</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} to="/nave-espacial" >Naves Espacial</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          <div>
              <Link to="/login">
                <Button id="login" variant="outline-warning">
                    Login
                </Button> {' '}
              </Link>
              <Link to='/cadastrar'>
                <Button id="cadastart" variant="warning">Cadastrar</Button> 
              </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}