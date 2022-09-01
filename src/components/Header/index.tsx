import { useState } from "react";

import { Link } from "react-router-dom";
import { Button, Container, Modal, Nav, Navbar, NavItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";

import styles from './Header.module.css';

import logoImg from '../../assets/logo.svg';

export function Header() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleClose = () => setIsVisibleModal(false);
  const handleOpenModal = () => setIsVisibleModal(true);
  const handleOpenModalSignUp = () => setIsVisibleModal(true);

  const teste = "verde"


  return (
    <>
      <Navbar className={styles.header} variant="dark">
        <Container >
          <Navbar.Collapse>
            <Navbar.Brand href="#home">
              <img src={logoImg} alt="" />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <NavItem>
                <Nav.Link className={styles.menu} as={Link} to="/" >Personages</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link className={styles.menu} as={Link} to="/nave-espacial" >Naves Espacial</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          <div>
            <Button id="login" onClick={handleOpenModal} variant="outline-warning">Login</Button> {' '}
            <Button id="cadastart" onClick={handleOpenModalSignUp} variant="warning">Cadastrar</Button>
          </div>
        </Container>
      </Navbar>

      <Modal show={isVisibleModal} onHide={handleClose}>
        <SignUp />
      </Modal>
    </>
  );
}