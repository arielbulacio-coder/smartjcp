import React from 'react';
import imgHeroMain from '../assets/highlights/cover_main.jpg';
import imgHeroSmall from '../assets/highlights/cover_community.jpg';

const AboutPage = () => {
    return (
        <div style={{ padding: '2rem 1rem 5rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>

            {/* Cabecera Institucional */}
            <div className="glass-card mb-5 p-0" style={{ overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                    <img src={imgHeroMain} alt="Portada SmartJCP" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                        padding: '2rem'
                    }}>
                        <h1 style={{ color: 'white', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>SmartJCP</h1>
                        <h2 style={{ color: 'var(--primary-color)', fontSize: '1.4rem' }}>Plataforma Educativa de José C. Paz</h2>
                    </div>
                </div>

                <div className="p-4">
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                        SmartJCP es la plataforma integral de gestión educativa y aprendizaje digital de <strong>José C. Paz, Ciudad del Aprendizaje</strong>.
                        Este proyecto nace con la visión de democratizar el acceso al conocimiento tecnológico y brindar herramientas de vanguardia a estudiantes, docentes y a toda la comunidad.
                    </p>
                </div>
            </div>

            {/* Características Principales */}
            <h2 className="text-center mb-4" style={{ color: 'var(--text-primary)' }}>Pilares del Proyecto</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                <div className="glass-card mb-0">
                    <h3 style={{ color: 'var(--secondary-color)' }}>🛠️ Educación Técnica</h3>
                    <p style={{ color: 'var(--text-dim)' }}>
                        Fortalecemos la formación técnica con simuladores interactivos de electrónica, física y matemática, permitiendo a los alumnos practicar en entornos virtuales seguros y modernos.
                    </p>
                </div>

                <div className="glass-card mb-0">
                    <h3 style={{ color: 'var(--primary-color)' }}>🌍 Inclusión Digital</h3>
                    <p style={{ color: 'var(--text-dim)' }}>
                        A través de los <strong>Cursos Abiertos a la Comunidad</strong>, ofrecemos capacitación gratuita en tecnologías emergentes como Inteligencia Artificial, Energías Renovables y Programación.
                    </p>
                </div>

                <div className="glass-card mb-0">
                    <h3 style={{ color: '#10b981' }}>📊 Gestión Inteligente</h3>
                    <p style={{ color: 'var(--text-dim)' }}>
                        Digitalizamos la administración escolar con un sistema integral de calificaciones, asistencia y legajos digitales, optimizando la tarea docente y directiva.
                    </p>
                </div>
            </div>

            {/* Gestión y Liderazgo */}
            <div className="glass-card p-0" style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
                <div style={{ flex: '1 1 350px', minHeight: '300px' }}>
                    <img src={imgHeroSmall} alt="Comunidad Educativa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: '1 1 400px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Liderazgo y Compromiso</h3>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                        Esta iniciativa es impulsada por la gestión del <strong>Intendente Mario Alberto Ishii</strong>, quien ha posicionado a José C. Paz como un referente internacional en educación, logrando el reconocimiento de la UNESCO.
                    </p>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                        Actualmente, desde su rol como <strong>Senador de la Provincia de Buenos Aires</strong>, continúa trabajando para expandir estas políticas de inclusión y desarrollo, asegurando que la educación pública sea el motor del progreso social.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;
