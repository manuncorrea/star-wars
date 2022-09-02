import { useState } from "react";

import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImg from '../../assets/logo.svg';
import { Logout } from "../Logout";
import useAuth from "../../hooks/useAuth";

export function Header() {
  //@ts-ignore
  const { signed } = useAuth();

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
            {
              signed === true ? <Logout /> : <Link to="/login">
                <Button id="login" variant="outline-warning">
                    Login
                </Button> {' '} <Link to='/cadastrar'>
                <Button id="cadastart" variant="warning">Cadastrar</Button> 
              </Link> 
              </Link>
            }
          </div>
        </Container>
      </Navbar>
    </>
  );
}