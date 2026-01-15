import React, { useState } from 'react';
import { Card, Button, ProgressBar, Badge, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import images (assuming vite handles this)
import imgAmbiental from '../assets/courses/curso_ambiental_1768497470324.png';
import imgEnergia from '../assets/courses/curso_energia_electrica_1768497487244.png';
import imgCloud from '../assets/courses/curso_cloud_computing_1768497506593.png';
import imgAI from '../assets/courses/curso_ia_learning_1768497523497.png';
import imgNewTech from '../assets/courses/curso_nuevas_tecnologias_1768497539937.png';
import imgBlockchain from '../assets/courses/curso_blockchain_1768497557259.png';
import imgIndustry from '../assets/courses/curso_industria_50_1768497576315.png';

const coursesData = [
    {
        id: 'ambiental',
        title: 'Cuidado Ambiental',
        description: 'Aprende sobre sostenibilidad, huella de carbono y prácticas ecológicas.',
        image: imgAmbiental,
        progress: 0,
        units: 4
    },
    {
        id: 'energia',
        title: 'Cuidado de la Energía',
        description: 'Eficiencia energética, renovables y el futuro de la red eléctrica.',
        image: imgEnergia,
        progress: 15,
        units: 5
    },
    {
        id: 'cloud',
        title: 'Cloud Computing',
        description: 'Fundamentos de la nube, AWS/GCP/Azure y arquitectura serverless.',
        image: imgCloud,
        progress: 40,
        units: 6
    },
    {
        id: 'ai',
        title: 'Inteligencia Artificial',
        description: 'Introducción a ML, redes neuronales y el futuro del aprendizaje.',
        image: imgAI,
        progress: 10,
        units: 8
    },
    {
        id: 'tech',
        title: 'Nuevas Tecnologías',
        description: 'VR, AR, IoT y el impacto de la tecnología 5G en la sociedad.',
        image: imgNewTech,
        progress: 0,
        units: 4
    },
    {
        id: 'blockchain',
        title: 'Blockchain',
        description: 'Criptografía, contratos inteligentes y descentralización financiera.',
        image: imgBlockchain,
        progress: 5,
        units: 5
    },
    {
        id: 'industry',
        title: 'Industria 5.0',
        description: 'La revolución industrial colaborativa: humanos + robots (Cobots).',
        image: imgIndustry,
        units: 3
    }
];

const CommunityCoursesPage = () => {
    // Load progress from localStorage
    const getProgress = (courseId) => {
        const saved = localStorage.getItem(`smartjcp_course_${courseId}`);
        try {
            if (saved) {
                const data = JSON.parse(saved);
                return data.progress || 0;
            }
        } catch (e) { console.error(e); }
        return 0; // Default
    };

    return (
        <Container className="py-5 app-container">
            <div className="text-center mb-5">
                <h1 className="mb-3">Cursos Abiertos a la Comunidad</h1>
                <p className="lead text-light-dim">
                    Capacitación continua certificada por la <strong>Ciudad del Aprendizaje</strong>.
                </p>
            </div>

            <Row xs={1} md={2} lg={3} className="g-4">
                {coursesData.map(course => {
                    const currentProgress = getProgress(course.id);
                    return (
                        <Col key={course.id}>
                            <Card className="h-100 glass-card p-0 border-0 overflow-hidden">
                                <Card.Img
                                    variant="top"
                                    src={course.image}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="text-light">{course.title}</Card.Title>
                                    <Card.Text className="text-light-dim flex-grow-1">
                                        {course.description}
                                    </Card.Text>

                                    <div className="mt-3">
                                        <div className="d-flex justify-content-between mb-1">
                                            <small className="text-muted-responsive">Progreso</small>
                                            <small className="text-light-primary">{currentProgress}%</small>
                                        </div>
                                        <ProgressBar now={currentProgress} variant="info" style={{ height: '6px' }} />
                                    </div>

                                    <Link to={`/cursos-comunidad/${course.id}`} className="mt-3">
                                        <Button variant="outline-info" className="w-100">
                                            {currentProgress > 0 ? 'Continuar' : 'Inscribirse'}
                                        </Button>
                                    </Link>
                                </Card.Body>
                                <Card.Footer className="border-0 bg-transparent">
                                    <Badge bg="secondary">{course.units} Unidades</Badge>
                                    <Badge bg="success" className="ms-2">Certificado</Badge>
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default CommunityCoursesPage;
