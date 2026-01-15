import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const games = [
    {
        id: 'quiz-ambiental',
        title: 'Quiz Ambiental',
        category: 'Medio Ambiente',
        icon: '🌳',
        color: '#10b981',
        desc: '¡Pon a prueba tu conocimiento sobre reciclaje y energías renovables!'
    },
    {
        id: 'circuit-puzzle',
        title: 'Puzzle de Circuitos',
        category: 'Energía',
        icon: '⚡',
        color: '#f59e0b',
        desc: 'Conecta los componentes correctamente para encender la luz.'
    },
    {
        id: 'crypto-decoder',
        title: 'Decodificador Crypto',
        category: 'Blockchain',
        icon: '🔗',
        color: '#6366f1',
        desc: 'Descifra los bloques de la cadena usando lógica matemática.'
    },
    {
        id: 'ai-logic',
        title: 'Entrena a la IA',
        category: 'Inteligencia Artificial',
        icon: '🤖',
        color: '#ef4444',
        desc: 'Clasifica imágenes para entrenar tu propia red neuronal básica.'
    },
    {
        id: 'city-builder',
        title: 'Smart City Tycoon',
        category: 'Tecnología',
        icon: '🏙️',
        color: '#3b82f6',
        desc: 'Construye la ciudad del futuro gestionando recursos hídricos y energéticos.'
    }
];

const GamificationPage = () => {
    return (
        <Container className="py-5 app-container">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold" style={{
                    background: 'linear-gradient(to right, #ff00cc, #333399)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Gamificación & Aprender Jugando
                </h1>
                <p className="lead text-light-dim">
                    Gana puntos, sube de nivel y desbloquea insignias mientras aprendes.
                </p>

                <div className="d-flex justify-content-center gap-4 mt-4">
                    <div className="glass-card px-4 py-2 text-center" style={{ minWidth: '120px' }}>
                        <span className="d-block fs-4">🏆</span>
                        <strong className="text-warning">Nivel 1</strong>
                    </div>
                    <div className="glass-card px-4 py-2 text-center" style={{ minWidth: '120px' }}>
                        <span className="d-block fs-4">⭐</span>
                        <strong className="text-info">0 Puntos</strong>
                    </div>
                </div>
            </div>

            <Row xs={1} md={2} lg={3} className="g-4">
                {games.map(game => (
                    <Col key={game.id}>
                        <Card className="h-100 glass-card border-0 hover-scale">
                            <Card.Body className="text-center py-5">
                                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{game.icon}</div>
                                <h3 className="text-light mb-3">{game.title}</h3>
                                <span className="badge mb-3" style={{ backgroundColor: game.color }}>{game.category}</span>
                                <p className="text-light-dim">{game.desc}</p>
                                <Button variant="outline-light" className="mt-3 rounded-pill px-4">
                                    JUGAR AHORA
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="mt-5 p-4 glass-card text-center">
                <h3 className="mb-3">🌟 Próximamente: Torneos Inter-Cursos</h3>
                <p>Compite con otros estudiantes de José C. Paz y demuestra tus habilidades.</p>
            </div>
        </Container>
    );
};

export default GamificationPage;
