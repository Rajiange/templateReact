import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

import './footer.css'

const Footer = () => {
  return (
    <footer>

      <Navbar className='py-3 color-nav' variant='dark'>
        <Container>
          <Navbar.Brand href="/home">Rajiange</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Row>
                <div className='example' color='white'>Vous pouvez également me retrouver sur :</div>
                <Col>
                  <div>
                    <ul>
                      <li><a className='testing' href="https://github.com/Rajiange"> <FaGithub size="2em" color='white'  /> github</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div>
                    <ul>
                      <li> <a className='testing'href="https://www.linkedin.com/in/maxime-cailliau-041464158/"> <AiFillLinkedin size="2em" color='white'  /> Linkedin </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div>
                    <ul>
                      <li> <a className='testing' href="https://twitter.com/Rajiange"> <AiFillTwitterCircle size="2em" color='white'  /> Twitter </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </footer>
  )
}

export default Footer
