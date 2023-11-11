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
                        <Link to={"/conocenos"}>
                        <Nav className='nav-link'>CONOCENOS</Nav>
                        </Link>
                        <NavDropdown title="SERVICIOS" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/servicios#softgel">Softgel</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/servicios#semipermanente">Semipermanente</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/servicios#esculpidas">Esculpidas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/servicios#nivelacion">Nivelación</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Brand className='d-none d-lg-block'>
                        <Link to="/">
                            <img src={logo} alt="" className='logo'/>
                        </Link>
                    </Navbar.Brand>
                    <Nav className='ms-auto '>
                        <Link to={"/reservar"}>              
                        <Nav className='nav-link' href="#link">RESERVAR</Nav>
                        </Link>
                        <Nav.Link href="#link">CONTACTO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar1;
