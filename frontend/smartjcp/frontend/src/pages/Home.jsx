import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="py-5">
            <section className="text-center mb-5 fade-in">
                <h1 className="display-3 fw-bold mb-3">José C. Paz</h1>
                <h2 className="display-6 text-primary mb-4" style={{ filter: 'brightness(1.2)' }}>Ciudad del Aprendizaje</h2>
                <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
                    Plataforma educativa impulsada por la gestión del Intendente <strong>Mario Alberto Ishi</strong>.
                    Un espacio para el desarrollo académico, tecnológico y profesional de nuestra comunidad.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <Button variant="primary" size="lg" className="px-4 fw-bold" style={{ background: 'var(--primary-color)', border: 'none', color: '#000' }}>Explorar Cursos</Button>
                    <Button variant="outline-light" size="lg" className="px-4">Campus Virtual</Button>
                </div>
            </section>

            <Row className="gy-4 mt-5">
                <Col md={4}>
                    <div className="glass-card h-100 d-flex flex-column">
                        <h3>🎓 Oferta Académica</h3>
                        <p>Descubre una amplia variedad de cursos, tecnicaturas y carreras universitarias disponibles en nuestro distrito.</p>
                        <Button variant="link" className="mt-auto text-start p-0 text-decoration-none" style={{ color: 'var(--primary-color)' }}>Ver más &rarr;</Button>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="glass-card h-100 d-flex flex-column">
                        <h3>🚀 Innovación y Tecnología</h3>
                        <p>Accede a laboratorios, talleres de robótica y programación. El futuro está en José C. Paz.</p>
                        <Button variant="link" className="mt-auto text-start p-0 text-decoration-none" style={{ color: 'var(--primary-color)' }}>Conocer proyectos &rarr;</Button>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="glass-card h-100 d-flex flex-column">
                        <h3>🏛️ Gestión Mario A. Ishi</h3>
                        <p>Comprometidos con la educación pública y de calidad como motor de crecimiento para nuestra ciudad.</p>
                        <Button variant="link" className="mt-auto text-start p-0 text-decoration-none" style={{ color: 'var(--primary-color)' }}>Leer gestión &rarr;</Button>
                    </div>
                </Col>
            </Row>

            <section className="mt-5 glass-card p-5 text-center">
                <h3>¿Listo para empezar?</h3>
                <p>Únete a miles de estudiantes que ya son parte de la Ciudad del Aprendizaje.</p>
                <Button variant="light" size="lg" className="mt-3">Registrarme Ahora</Button>
            </section>
        </Container>
    );
};

export default Home;
