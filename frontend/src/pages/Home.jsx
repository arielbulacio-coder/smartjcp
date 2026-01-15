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
                <div className="glass-card p-4" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid var(--primary-color)' }}>
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
                <>
                    <h2 style={{ marginBottom: '2rem' }}>Módulos Educativos</h2>

                    {/* Leyes Fundamentales */}
                    <div style={{ maxWidth: '1200px', margin: '0 auto 3rem auto' }}>
                        <h3 style={{ textAlign: 'left', color: 'var(--primary-color)', marginBottom: '1rem', paddingLeft: '1rem' }}>⚡ Leyes Fundamentales</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <Link to="/ley-ohm" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Ley de Ohm</h3>
                                    <p>Calculadora y Teoría Fundamental</p>
                                    <div style={{ marginTop: '1rem', color: 'var(--primary-color)', fontSize: '2rem' }}>Ω</div>
                                </div>
                            </Link>

                            <Link to="/kirchhoff" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Leyes de Kirchhoff</h3>
                                    <p>Análisis de Mallas y Nodos</p>
                                    <div style={{ marginTop: '1rem', color: 'var(--secondary-color)', fontSize: '2rem' }}>∑</div>
                                </div>
                            </Link>

                            <Link to="/teorema-thevenin" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Teorema de Thévenin</h3>
                                    <p>Circuitos Equivalentes</p>
                                    <div style={{ marginTop: '1rem', color: 'var(--primary-color)', fontSize: '2rem' }}>⚙️</div>
                                </div>
                            </Link>

                            <Link to="/teorema-norton" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Teorema de Norton</h3>
                                    <p>Fuentes de Corriente Equivalentes</p>
                                    <div style={{ marginTop: '1rem', color: 'var(--secondary-color)', fontSize: '2rem' }}>🔌</div>
                                </div>
                            </Link>

                            <Link to="/potencia" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Potencia Eléctrica</h3>
                                    <p>Ley de Watt y Disipación</p>
                                    <div style={{ marginTop: '1rem', color: 'var(--primary-color)', fontSize: '2rem' }}>⚡</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Resistencias */}
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h3 style={{ textAlign: 'left', color: 'var(--secondary-color)', marginBottom: '1rem', paddingLeft: '1rem' }}>🔧 Resistencias</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <Link to="/codigos-resistencias" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Códigos de Color</h3>
                                    <p>Identificación de Valores</p>
                                    <div style={{ marginTop: '1rem', display: 'flex', gap: '5px' }}>
                                        <div style={{ width: '20px', height: '10px', backgroundColor: 'red' }}></div>
                                        <div style={{ width: '20px', height: '10px', backgroundColor: 'purple' }}></div>
                                        <div style={{ width: '20px', height: '10px', backgroundColor: 'yellow' }}></div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/resistencias-serie-paralelo" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Serie y Paralelo</h3>
                                    <p>Resistencias Equivalentes</p>
                                    <div style={{ marginTop: '1rem', color: 'var(--primary-color)', fontSize: '2rem' }}>⚡</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Herramientas */}
                    <div style={{ maxWidth: '1200px', margin: '3rem auto 0 auto' }}>
                        <h3 style={{ textAlign: 'left', color: 'var(--primary-color)', marginBottom: '1rem', paddingLeft: '1rem' }}>📐 Herramientas de Medida</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <Link to="/conversion-unidades" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Conversor de Unidades</h3>
                                    <p>Imperial a Métrico y Viceversa</p>
                                    <div style={{ marginTop: '1rem', color: 'var(--primary-color)', fontSize: '2rem' }}>📏</div>
                                </div>
                            </Link>

                            <Link to="/pitagoras" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Pitágoras</h3>
                                    <p>Teorema y Cálculos de Triángulos</p>
                                    <div style={{ marginTop: '1rem', color: 'var(--secondary-color)', fontSize: '2rem' }}>📐</div>
                                </div>
                            </Link>

                            <Link to="/trigonometria" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Trigonometría</h3>
                                    <p>Funciones Seno, Coseno y Tangente</p>
                                    <div style={{ marginTop: '1rem', color: 'var(--primary-color)', fontSize: '2rem' }}>📐</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Física */}
                    <div style={{ maxWidth: '1200px', margin: '3rem auto 0 auto' }}>
                        <h3 style={{ textAlign: 'left', color: 'var(--secondary-color)', marginBottom: '1rem', paddingLeft: '1rem' }}>🚀 Ciencias Físicas</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <Link to="/cinematica" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Cinemática</h3>
                                    <p>Movimiento MRU y MRUV</p>
                                    <div style={{ marginTop: '1rem', color: 'var(--secondary-color)', fontSize: '2rem' }}>🏎️</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Taller */}
                    <div style={{ maxWidth: '1200px', margin: '3rem auto 0 auto' }}>
                        <h3 style={{ textAlign: 'left', color: 'var(--primary-color)', marginBottom: '1rem', paddingLeft: '1rem' }}>⚒️ Taller y Herramientas</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <Link to="/micrometro" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Micrómetro</h3>
                                    <p>Simulador de Medición de Precisión</p>
                                    <img src={imgMicrometer} alt="Micrómetro" style={{ width: '80px', height: '80px', objectFit: 'contain', marginTop: '1rem' }} />
                                </div>
                            </Link>

                            <Link to="/calibre" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Calibre</h3>
                                    <p>Uso del Nonio y Pie de Rey</p>
                                    <img src={imgCaliper} alt="Calibre" style={{ width: '80px', height: '80px', objectFit: 'contain', marginTop: '1rem' }} />
                                </div>
                            </Link>

                            <Link to="/metro-carpintero" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Metro</h3>
                                    <p>Herramienta Plegable de Madera</p>
                                    <img src={`${import.meta.env.BASE_URL}assets/ruler_v2.png`} alt="Metro Carpintero" style={{ width: '80px', height: '80px', objectFit: 'contain', marginTop: '1rem' }} />
                                </div>
                            </Link>

                            <Link to="/seguridad-epp" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Seguridad</h3>
                                    <p>Elementos de Protección (EPP)</p>
                                    <div style={{ marginTop: '1rem', color: '#ef4444', fontSize: '3rem' }}>🛡️</div>
                                </div>
                            </Link>

                            <Link to="/herramientas-carpinteria" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Carpintería</h3>
                                    <p>Manuales de Madera</p>
                                    <img src={`${import.meta.env.BASE_URL}assets/saw_v2.png`} alt="Carpintería" style={{ width: '80px', height: '80px', objectFit: 'contain', marginTop: '1rem' }} />
                                </div>
                            </Link>

                            <Link to="/metal-mecanica" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Mecánica</h3>
                                    <p>Metal y Ajuste</p>
                                    <div style={{ marginTop: '1rem', color: '#3b82f6', fontSize: '3rem' }}>🔩</div>
                                </div>
                            </Link>

                            <Link to="/herramientas-electricidad" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Electricidad</h3>
                                    <p>Instalaciones Eléctricas</p>
                                    <div style={{ marginTop: '1rem', color: '#eab308', fontSize: '3rem' }}>⚡</div>
                                </div>
                            </Link>

                            <Link to="/herramientas-electronica" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Electrónica</h3>
                                    <p>Laboratorio y Circuitos</p>
                                    <img src={imgSoldering} alt="Electrónica" style={{ width: '80px', height: '80px', objectFit: 'contain', marginTop: '1rem' }} />
                                </div>
                            </Link>

                            <Link to="/osciloscopio" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Osciloscopio</h3>
                                    <p>Simulador Dinámico</p>
                                    <img src={imgOscilloscope} alt="Osciloscopio" style={{ width: '80px', height: '80px', objectFit: 'contain', marginTop: '1rem' }} />
                                </div>
                            </Link>

                            <Link to="/multimetro" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Multímetros</h3>
                                    <p>Tester Digital y Analógico</p>
                                    <img src={imgMultimeter} alt="Multímetro" style={{ width: '80px', height: '80px', objectFit: 'contain', marginTop: '1rem' }} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
