import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import navImage from '../shared/code.png';

function NavBar() 
{
  return (
    <>
      <Navbar className="bg-body-tertiary navbar">
        <Container>
          <Nav className="d-flex justify-content-between ">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Navbar.Brand href="/">
              <img
                alt="Dev Symbol"
                src={navImage}
                width="70"
                height="70"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
