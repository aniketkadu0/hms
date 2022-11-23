import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function HomePage(){

    return(
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={NavLink} to="/" >Home</Navbar.Brand>
          <Nav className="me-auto">            
            <Nav.Link as={NavLink} to="/gallery" >Gallery</Nav.Link>
            <Nav.Link as={NavLink} to="/aboutus" >About</Nav.Link>
            <Nav.Link as={NavLink} to="/contactus" >Contact</Nav.Link>
          </Nav>
          <Navbar.Brand className='btn btn-lg btn-outline-warning' as={NavLink} to="/signin">Sign in</Navbar.Brand>
        </Container>
      </Navbar>
    );
}
