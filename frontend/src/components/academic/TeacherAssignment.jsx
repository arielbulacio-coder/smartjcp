import React, { useState, useEffect } from 'react';
import api from '../../api';
// import { COURSES, SUBJECTS } from './constants'; // Replaced by dynamic API data
import { useAuth } from '../../context/AuthContext';

const TeacherAssignment = () => {
    const { user } = useAuth();
    const [teachers, setTeachers] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(false);

    // State for Dynamic Options
    const [courseOptions, setCourseOptions] = useState([]);
    const [subjectOptions, setSubjectOptions] = useState([]);

    // Form State
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Load dynamic data from new endpoints
            const [resUsers, resCursos, resMaterias, resAsig] = await Promise.all([
                api.get('/users'),
                api.get('/cursos'),
                api.get('/materias'),
                api.get('/profesor/asignaciones')
            ]);

            // Teachers
            const profs = resUsers.data.filter(u => u.role && u.role.toLowerCase() === 'profesor');
            setTeachers(profs);
            if (profs.length > 0 && !selectedTeacher) setSelectedTeacher(profs[0].email);

            // Courses
            setCourseOptions(resCursos.data);
            if (resCursos.data.length > 0) setSelectedCourse(resCursos.data[0].nombre);

            // Subjects
            setSubjectOptions(resMaterias.data);
            if (resMaterias.data.length > 0) setSelectedSubject(resMaterias.data[0].nombre);

            // Assignments
            setAssignments(resAsig.data);

        } catch (error) {
            console.error('Error fetching data, using MOCK data:', error);
            // MOCK DATA FALLBACK FOR DEMO
            // Teachers
            const mockTeachers = [
                { id: 1, email: 'juan.perez@smartjcp.edu', role: 'profesor' },
                { id: 2, email: 'maria.gonzalez@smartjcp.edu', role: 'profesor' },
                { id: 3, email: 'roberto.gomez@smartjcp.edu', role: 'profesor' }
            ];
            setTeachers(mockTeachers);
            if (!selectedTeacher) setSelectedTeacher(mockTeachers[0].email);

            // Courses (renamed from "Cursos" context to "Aulas/Grados")
            const mockCursos = [
                { id: 1, nombre: '1° Año - A' },
                { id: 2, nombre: '2° Año - B' },
                { id: 3, nombre: 'Curso Python' },
                { id: 4, nombre: 'Curso Robótica' }
            ];
            setCourseOptions(mockCursos);
            if (!selectedCourse) setSelectedCourse(mockCursos[0].nombre);

            // Subjects (Materia -> Curso Temático)
            const mockMaterias = [
                { id: 1, nombre: 'Matemáticas' },
                { id: 2, nombre: 'Programación I' },
                { id: 3, nombre: 'Robótica Aplicada' },
                { id: 4, nombre: 'Diseño Web' }
            ];
            setSubjectOptions(mockMaterias);
            if (!selectedSubject) setSelectedSubject(mockMaterias[0].nombre);

            // Assignments
            setAssignments([
                { id: 1, email_profesor: 'juan.perez@smartjcp.edu', curso: 'Curso Python', materia: 'Programación I', ciclo_lectivo: 2026 },
                { id: 2, email_profesor: 'maria.gonzalez@smartjcp.edu', curso: 'Curso Robótica', materia: 'Robótica Aplicada', ciclo_lectivo: 2026 }
            ]);
        }
        setLoading(false);
    };

    const handleAssign = async () => {
        if (!selectedTeacher) return alert('Seleccione un profesor');

        // Prevent duplicate in frontend to save a call (optional, backend allows duplicates? Model doesn't enforcing unique logic yet but should)
        // Let's just call backend
        try {
            setLoading(true);
            await api.post('/admin/asignar-materia', {
                email_profesor: selectedTeacher,
                curso: selectedCourse,
                materia: selectedSubject
            });
            alert('Curso asignado correctamente');
            fetchData();
        } catch (error) {
            console.error(error);
            alert('Error al asignar materia');
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Seguro que desea eliminar esta asignación?')) return;
        try {
            setLoading(true);
            await api.delete(`/admin/asignar-materia/${id}`);
            fetchData();
        } catch (error) {
            console.error(error);
            alert('Error al eliminar asignación');
        }
        setLoading(false);
    };

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
            <h1 className="mb-4 text-center">Gestión de Docentes y Cursos</h1>

            {/* CREATE CARD */}
            <div className="glass-card p-4 mb-5">
                <h3 className="mb-3">Asignar Nuevo Curso</h3>
                <div className="d-flex gap-3 flex-wrap align-items-end">
                    <div style={{ flex: 1, minWidth: '250px' }}>
                        <label className="d-block mb-2">Docente</label>
                        <select className="form-control" value={selectedTeacher} onChange={e => setSelectedTeacher(e.target.value)}>
                            <option value="">-- Seleccionar --</option>
                            {teachers.map(t => (
                                <option key={t.id} value={t.email}>{t.email}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ width: '150px' }}>
                        <label className="d-block mb-2">Curso</label>
                        <select className="form-control" value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)}>
                            {courseOptions.map(c => <option key={c.id} value={c.nombre}>{c.nombre}</option>)}
                        </select>
                    </div>

                    <div style={{ flex: 1, minWidth: '250px' }}>
                        <label className="d-block mb-2">Curso</label>
                        <select className="form-control" value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)}>
                            {subjectOptions.map(s => <option key={s.id} value={s.nombre}>{s.nombre}</option>)}
                        </select>
                    </div>

                    <button className="btn btn-primary" onClick={handleAssign} disabled={loading} style={{ height: '42px' }}>
                        {loading ? '...' : '➕ Asignar'}
                    </button>
                </div>
            </div>

            {/* LIST CARD */}
            <div className="glass-card p-4">
                <h3 className="mb-3">Asignaciones Vigentes</h3>
                <div className="table-responsive">
                    <table className="table" style={{ color: 'var(--text-primary)' }}>
                        <thead>
                            <tr>
                                <th>Docente</th>
                                <th>Curso</th>
                                <th>Curso</th>
                                <th>Ciclo</th>
                                <th style={{ textAlign: 'right' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments.map(a => (
                                <tr key={a.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <td>{a.email_profesor}</td>
                                    <td><span className="badge bg-secondary">{a.curso}</span></td>
                                    <td>{a.materia}</td>
                                    <td>{a.ciclo_lectivo}</td>
                                    <td style={{ textAlign: 'right' }}>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(a.id)}>
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {assignments.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center p-4">No hay asignaciones registradas.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeacherAssignment;
