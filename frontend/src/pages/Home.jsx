import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../carousel.css';
import { useAuth } from '../context/AuthContext';

// Import Assets
import img1 from '../assets/carousel/2.jpg';
import img2 from '../assets/carousel/3.jpg';
import img3 from '../assets/carousel/4.jpg';
import img4 from '../assets/carousel/5.jpeg';
import img5 from '../assets/carousel/6.jpeg';
import img6 from '../assets/carousel/7.jpg';
import imgLogo from '../assets/carousel/IMG-20251211-WA0113.jpg';

// Tool Icons removed as they are no longer displayed on Home


// Import Community Course Images
import imgIA from '../assets/courses/curso_ia_learning_1768497523497.png';
import imgCloud from '../assets/courses/curso_cloud_computing_1768497506593.png';
import imgEnergia from '../assets/courses/curso_energia_electrica_1768497487244.png';

// ... other imports

const Home = () => {
    const { isAuthenticated } = useAuth();
    return (
        <div className="app-container" style={{ textAlign: 'center', paddingTop: '1rem', paddingBottom: '5rem' }}>

            {/* Header / Context Section */}
            <div className="glass-card" style={{ maxWidth: '100%', margin: '0 auto 1.5rem auto', padding: '1.5rem', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                    <img
                        src={imgLogo}
                        alt="Logo José C. Paz"
                        style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
                    />
                    <div>
                        <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0.5rem 0', lineHeight: '1.2' }}>Plataforma Educativa SmartJCP</h1>
                        <h2 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', margin: 0 }}>José C. Paz: Ciudad del Aprendizaje</h2>
                        <h3 style={{ fontSize: '1rem', color: 'var(--text-dim)', margin: '0.5rem 0 0 0' }}>Intendente Mario Alberto Ishii</h3>
                    </div>
                </div>

                <div style={{ marginTop: '1.5rem', textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.5', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                    <p style={{ marginBottom: '0.5rem' }}>
                        <strong>Reconocimiento UNESCO:</strong> José C. Paz ha sido reconocida internacionalmente por la UNESCO como "Ciudad del Aprendizaje" por su modelo de transformación educativa e inclusión social.
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        "La apuesta del municipio por el aprendizaje permanente y por una educación accesible para todos transformó a la ciudad en un modelo de inclusión social y desarrollo sostenible."
                        <br />
                        <a href="https://www.revistagente.com/actualidad/jose-c-paz-reconocida-por-la-unesco-por-su-modelo-de-transformacion-educativa/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-color)', textDecoration: 'underline' }}>Leer nota completa en Gente Online</a>
                    </p>
                </div>
            </div>

            {/* Start Smart City Vision Section */}
            <div style={{ maxWidth: '1200px', margin: '0 auto 2rem auto', textAlign: 'left' }}>
                <div className="glass-card p-4" style={{ border: '1px solid var(--primary-color)' }}>
                    <h2 className="text-center mb-4" style={{
                        background: 'linear-gradient(90deg, #00f2ff, #00c6ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        Visión Smart City 2030
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Feature 1 */}
                        <div style={{ padding: '1rem', borderLeft: '3px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem' }}>📡 Conectividad & Networking</h3>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>
                                Infraestructura tecnológica basada en <strong>Cloud Computing</strong> y redes de alta velocidad.
                                Un ecosistema digital multidisciplinario que conecta a docentes, alumnos y la comunidad en tiempo real.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div style={{ padding: '1rem', borderLeft: '3px solid var(--secondary-color)' }}>
                            <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem' }}>🎨 Diseño Funcional & Moderno</h3>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>
                                Una experiencia de usuario (UX) <strong>amigable, elegante y funcional</strong>.
                                Aplicación multiplataforma y multidispositivo pensada para el estudiante digital del siglo XXI.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div style={{ padding: '1rem', borderLeft: '3px solid #10b981' }}>
                            <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem' }}>🧠 Sociedad del Conocimiento</h3>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>
                                Fomentando el desarrollo de <strong>estudiantes destacados</strong> mediante el acceso universal al aprendizaje.
                                Un nuevo concepto educativo centrado en la innovación y el talento local.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Smart City Vision Section */}

            {/* Bootstrap Carousel - New Images */}
            <div style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto 2rem auto',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <Carousel fade interval={3500} pause="hover" touch={true}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="Slide 1" style={{ height: '300px', objectFit: 'cover' }} />
                        <Carousel.Caption className="glass-panel-caption">
                            <h3>Infraestructura Escolar</h3>
                            <p>Nuevos espacios para el aprendizaje técnico.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="Slide 2" style={{ height: '300px', objectFit: 'cover' }} />
                        <Carousel.Caption className="glass-panel-caption">
                            <h3>Tecnología Avanzada</h3>
                            <p>Equipamiento moderno para nuestros estudiantes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img3} alt="Slide 3" style={{ height: '300px', objectFit: 'cover' }} />
                        <Carousel.Caption className="glass-panel-caption">
                            <h3>Comunidad Educativa</h3>
                            <p>Compromiso con la educación pública de calidad.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img4} alt="Slide 4" style={{ height: '300px', objectFit: 'cover' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img5} alt="Slide 5" style={{ height: '300px', objectFit: 'cover' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img6} alt="Slide 6" style={{ height: '300px', objectFit: 'cover' }} />
                    </Carousel.Item>
                </Carousel>
            </div>


            {isAuthenticated && (
                <div style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '1200px', margin: '3rem auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
                        <h2 style={{ margin: 0 }}>🌍 Cursos Abiertos a la Comunidad</h2>
                        <Link to="/cursos-comunidad" className="btn btn-outline-primary" style={{ borderRadius: '20px' }}>Ver todos</Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '0 1rem' }}>
                        {/* Course Card 1 */}
                        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', margin: 0, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '160px', overflow: 'hidden' }}>
                                <img src={imgIA} alt="IA Learning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Inteligencia Artificial</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', flex: 1 }}>
                                    Aprende los fundamentos de la IA y Machine Learning aplicados a problemas reales.
                                </p>
                                <div style={{ marginTop: '1rem' }}>
                                    <span className="badge bg-primary me-2">Tecnología</span>
                                    <span className="badge bg-info text-dark">Gratuito</span>
                                </div>
                            </div>
                        </div>

                        {/* Course Card 2 */}
                        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', margin: 0, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '160px', overflow: 'hidden' }}>
                                <img src={imgCloud} alt="Cloud Computing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Cloud Computing</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', flex: 1 }}>
                                    Domina la nube con AWS y Google Cloud. Despliegue, escalabilidad y seguridad.
                                </p>
                                <div style={{ marginTop: '1rem' }}>
                                    <span className="badge bg-primary me-2">Infraestructura</span>
                                    <span className="badge bg-info text-dark">Certificado</span>
                                </div>
                            </div>
                        </div>

                        {/* Course Card 3 */}
                        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', margin: 0, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '160px', overflow: 'hidden' }}>
                                <img src={imgEnergia} alt="Energías Renovables" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Energías Renovables</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', flex: 1 }}>
                                    Introducción a sistemas solares y eólicos para un futuro sustentable.
                                </p>
                                <div style={{ marginTop: '1rem' }}>
                                    <span className="badge bg-success me-2">Sustentabilidad</span>
                                    <span className="badge bg-info text-dark">Práctico</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
