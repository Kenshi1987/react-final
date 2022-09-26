import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


export default function Navigation() {
  return (
    <Navbar bg="light" expand="md" className='position-sticky'>
      <Container>
        <Link to="/" style = {{textDecoration: "none"}}>
        <Navbar.Brand>Elementos</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center">

            <Link to="/category/Servicios" className="nav-link ms-3 me-3">
            Servicios
            </Link>
            <Link to="/category/Productos" className="nav-link ms-3 me-3">
            Productos
            </Link>                                   
          </Nav> 
          
          <Link to="/Cart" style = {{textDecoration: "none", color:"green"}}><CartWidget/></Link>
                                  
        </Navbar.Collapse>  
                
      </Container>
      
      
    </Navbar>
    
  );
}
