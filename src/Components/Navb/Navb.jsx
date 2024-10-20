import "./Navb.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Navb() {
  return (
    <Navbar expand="lg" id="navb">
      <Container>
        <Navbar.Brand href="#home">Gestor Económico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/registrogastos">Gastos</Nav.Link>
            <Nav.Link href="/categorias">Categoria</Nav.Link>
            <Nav.Link href="/metodopagos">Pagos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}