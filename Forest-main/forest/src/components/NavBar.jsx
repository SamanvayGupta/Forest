import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed top-0 z-10 w-[100vw]">
      <Container>
        <Navbar.Brand as={Link} to="/">Forest</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/FloraFauna">Flora and Fauna</Nav.Link>
            <Nav.Link as={Link} to="/abiotic">Abiotic Factors</Nav.Link>
            <Nav.Link as={Link} to="/habitat">Habitat</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/decomposers">Decomposers</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;