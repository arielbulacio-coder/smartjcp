import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    return (
        <Navbar expand="lg" variant="dark" style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--glass-border)' }} sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
                    <div>
                        <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>SMART</span> <span style={{ color: 'white' }}>JCP</span>
                        <div style={{ fontSize: '0.6em', opacity: 0.8, lineHeight: 1 }}>Ciudad del Aprendizaje</div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Inicio</Nav.Link>
                        <Nav.Link href="#cursos">Cursos</Nav.Link>
                        <Nav.Link href="#noticias">Noticias</Nav.Link>
                        <Nav.Link href="#campus">Campus Virtual</Nav.Link>
                    </Nav>
                    <div className="d-flex gap-2 ms-3">
                        <Button variant="outline-light" size="sm" className="px-3" style={{ borderRadius: '20px' }}>Ingresar</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
