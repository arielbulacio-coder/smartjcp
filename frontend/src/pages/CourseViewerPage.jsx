import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Tab, Nav, Form, ProgressBar, Alert } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const CourseViewerPage = () => {
    const { id } = useParams();
    const [activeUnit, setActiveUnit] = useState('u1');
    const [quizAnswers, setQuizAnswers] = useState(() => {
        // Load initial state
        const saved = localStorage.getItem(`smartjcp_course_${id}`);
        try {
            return saved ? JSON.parse(saved).answers : {};
        } catch (e) { return {}; }
    });
    const [showCertificate, setShowCertificate] = useState(false);

    // MOCK DATA - In real app, fetch by ID
    const course = {
        title: id?.toUpperCase().replace('-', ' ') || 'CURSO',
        description: 'Curso completo de formación profesional.',
        units: [
            {
                id: 'u1', title: 'Unidad 1: Fundamentos',
                content: 'Introducción a los conceptos clave. Historia y evolución. ¿Por qué es importante este tema hoy en día? El impacto en la Ciudad del Aprendizaje.',
                quiz: [
                    { id: 'q1', text: '¿Cuál es el objetivo principal?', options: ['Aprender', 'Dormir', 'Comer'], correct: 0 }
                ]
            },
            {
                id: 'u2', title: 'Unidad 2: Aplicaciones Prácticas',
                content: 'Casos de uso reales. Ejemplos en la industria. Cómo aplicar lo aprendido en tu entorno local. Proyectos en José C. Paz.',
                quiz: [
                    { id: 'q2', text: '¿Dónde se aplica?', options: ['En todo lugar', 'Solo en Marte', 'Bajo el agua'], correct: 0 }
                ]
            },
            {
                id: 'u3', title: 'Unidad 3: Futuro y Tendencias',
                content: 'Hacia dónde va la tecnología. Oportunidades laborales. Innovación y desarrollo sustentable.',
                quiz: [
                    { id: 'q3', text: '¿El futuro es?', options: ['Digital', 'Analógico', 'Incierto'], correct: 0 }
                ]
            }
        ]
    };

    const calculateProgress = (answers) => {
        const total = course.units.reduce((acc, u) => acc + (u.quiz ? u.quiz.length : 0), 0);
        const answered = Object.keys(answers).length;
        if (total === 0) return 0;
        return Math.round((answered / total) * 100);
    };

    const handleAnswer = (qId, optionIdx) => {
        const newAnswers = { ...quizAnswers, [qId]: optionIdx };
        setQuizAnswers(newAnswers);

        // Save to localStorage
        const progress = calculateProgress(newAnswers);
        localStorage.setItem(`smartjcp_course_${id}`, JSON.stringify({
            answers: newAnswers,
            progress: progress,
            lastAccess: new Date().toISOString()
        }));
    };

    return (
        <Container className="py-5 app-container">
            <Link to="/cursos-comunidad" className="text-decoration-none">← Volver al Catálogo</Link>

            <div className="d-flex justify-content-between align-items-center mt-3 mb-4 flex-wrap">
                <h1>{course.title}</h1>
                <div style={{ width: '200px' }}>
                    <small>Progreso General</small>
                    <ProgressBar now={calculateProgress(quizAnswers)} variant="success" label={`${calculateProgress(quizAnswers)}%`} />
                </div>
            </div>

            <Row>
                <Col md={3} className="mb-4">
                    <Card className="glass-card p-0 border-0">
                        <Card.Header className="bg-transparent border-bottom border-light text-light fw-bold">
                            Contenido del Curso
                        </Card.Header>
                        <Nav variant="pills" className="flex-column p-2">
                            {course.units.map(unit => (
                                <Nav.Link
                                    key={unit.id}
                                    active={activeUnit === unit.id}
                                    onClick={() => setActiveUnit(unit.id)}
                                    className="mb-1 text-light-dim"
                                    style={{ cursor: 'pointer', background: activeUnit === unit.id ? 'var(--primary-color)' : 'transparent', color: activeUnit === unit.id ? '#000 !important' : 'inherit' }}
                                >
                                    {unit.title}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Card>

                    {calculateProgress(quizAnswers) === 100 && (
                        <div className="mt-3">
                            <Button variant="success" className="w-100 fw-bold" onClick={() => setShowCertificate(true)}>
                                🏆 Solicitar Certificado
                            </Button>
                        </div>
                    )}
                </Col>

                <Col md={9}>
                    <Card className="glass-card border-0">
                        <Card.Body>
                            {course.units.map(unit => (
                                <div key={unit.id} className={activeUnit === unit.id ? 'd-block' : 'd-none'}>
                                    <h2 className="text-primary mb-4">{unit.title}</h2>
                                    <div className="course-content mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        <p>{unit.content}</p>
                                        <div className="placeholder-content p-4 bg-dark bg-opacity-25 rounded border border-secondary mt-3">
                                            <small className="text-muted d-block mb-2">Recurso Multimedia (Video/Presentación)</small>
                                            <div className="ratio ratio-16x9 bg-black rounded d-flex align-items-center justify-content-center">
                                                <span className="text-muted">Video Player Placeholder</span>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-5 border-secondary" />

                                    <h3 className="mb-4">📝 Evaluación de la Unidad</h3>
                                    {unit.quiz && unit.quiz.map((q, idx) => (
                                        <Card key={q.id} className="mb-3 bg-dark bg-opacity-10 border border-secondary">
                                            <Card.Body>
                                                <Card.Title className="h5 mb-3">{idx + 1}. {q.text}</Card.Title>
                                                <Form>
                                                    {q.options.map((opt, oIdx) => (
                                                        <Form.Check
                                                            key={oIdx}
                                                            type="radio"
                                                            label={opt}
                                                            name={`q-${q.id}`}
                                                            id={`q-${q.id}-${oIdx}`}
                                                            onChange={() => handleAnswer(q.id, oIdx)}
                                                            checked={quizAnswers[q.id] === oIdx}
                                                            className="mb-2"
                                                        />
                                                    ))}
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {showCertificate && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(0,0,0,0.8)', zIndex: 1050 }}>
                    <Card className="glass-card border-warning p-4 text-center" style={{ maxWidth: '600px', border: '4px solid gold' }}>
                        <Card.Body>
                            <h1 className="text-warning display-4 mb-4">🏅 Certificado de Finalización</h1>
                            <p className="lead">Se certifica que el estudiante ha completado satisfactoriamente el curso:</p>
                            <h2 className="my-4 text-white">{course.title}</h2>
                            <p>Otorgado por la <strong>Ciudad del Aprendizaje</strong> - José C. Paz.</p>
                            <div className="mt-4">
                                <Button variant="outline-light" onClick={() => setShowCertificate(false)}>Cerrar</Button>
                                <Button variant="warning" className="ms-2">Descargar PDF</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </Container>
    );
};

export default CourseViewerPage;
