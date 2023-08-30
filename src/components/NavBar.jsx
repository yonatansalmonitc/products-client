import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  return (
    <Container className='navControl'>
      <Navbar className='nav px-5'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Nav className='me-auto'>
          <Link className='navLink mx-5' to='/'>
            Login
          </Link>
          <Link className='navLink mx-5' to='/signup'>
            Sign Up
          </Link>
          <Link className='navLink navHome' to='/products'>
            Products
          </Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default NavBar;
