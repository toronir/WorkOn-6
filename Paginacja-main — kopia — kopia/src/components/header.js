

import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'






const Header = () => {

    return (
        <header>
            
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                                <NavLink className="nav-link" to="reactrouterdom">RecBoo</NavLink>
                                <NavLink className="nav-link" to="axios">Axios</NavLink>
                                <NavLink className="nav-link" to="formik">Formik</NavLink>
                                <NavLink className="nav-link" to="redux">Redux</NavLink>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
           

        </header>
    )

}




export default Header