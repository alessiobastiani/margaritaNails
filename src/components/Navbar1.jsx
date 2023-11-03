import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo2.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    return (
        <Navbar expand="lg" className="navegador">
            <Container>
                <Navbar.Brand className="d-lg-none">
                    <Link to="/">
                        <img src={logo} alt="" className='logo'/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto liks-uno'>
                        <Nav.Link>CONÓCENOS</Nav.Link>
                        <Link to={"/servicios"}> 
                        <NavDropdown title="SERVICIOS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#softgel">Softgel</NavDropdown.Item>
                            <NavDropdown.Item href="#semipermanente">Semipermanente</NavDropdown.Item>
                            <NavDropdown.Item href="#esculpidas">Esculpidas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#nivelacion">Nivelación</NavDropdown.Item>
                        </NavDropdown>
                        </Link>
                    </Nav>
                    <Navbar.Brand className='d-none d-lg-block'>
                        <Link to="/">
                            <img src={logo} alt="" className='logo'/>
                        </Link>
                    </Navbar.Brand>
                    <Nav className='ms-auto '>
                        <Nav.Link href="#link">RESERVAR</Nav.Link>
                        <Nav.Link href="#link">CONTACTO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar1;