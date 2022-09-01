import { Link } from "react-router-dom";
import styles from './Header.module.css';
import { Button, Container, Modal, Nav, Navbar, NavItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { SignIn } from "../../pages/SignIn";

export function Header() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleClose = () => setIsVisibleModal(false);
  const handleOpenModal = () => setIsVisibleModal(true);

   return (
    <>
      <Navbar className={styles.header}  variant="dark">
        <Container >
          <Navbar.Collapse>
            <Navbar.Brand href="#home">Star-Wars</Navbar.Brand>
            <Nav className="mr-auto">
            <NavItem>
                <Nav.Link as={Link} to="/" >Personages</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} to="/armas" >Armas</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} to="/nave-espacial" >Naves Espacial</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          <Button onClick={handleOpenModal} variant="outline-primary">Login</Button>
        </Container>
      </Navbar>

      <Modal show={isVisibleModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <SignIn />
      </Modal>
    </>
  );
}