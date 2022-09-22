import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {

  return (
    <header>
      <Navbar className='py-3 color-nav' fixed="top" variant='dark' expand="xl" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/home">Rajiange</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/home"> Acceuil </Nav.Link>
            <Nav.Link as={Link} to="/radar">Radar nft </Nav.Link>
            <Nav.Link as={Link} to="/services">Services </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      < br/>
    </Navbar>
    </header>
  )
}

export default Header
