
import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Al iniciar, verificamos si hay un token válido
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            // Intento de login real
            const response = await api.post('/login', { email, password });
            const { token: newToken, user: userData } = response.data;

            setToken(newToken);
            setUser(userData);
            localStorage.setItem('token', newToken);
            localStorage.setItem('user', JSON.stringify(userData));
            return { success: true };
        } catch (error) {
            console.error("API Login failed, trying mock fallback...", error);

            // FALLBACK MOCK PARA GITHUB PAGES / DEMO
            // Si el backend no responde, simulamos un login exitoso para demostración
            // Permitimos cualquier credencial
            const mockUser = {
                id: 999,
                nombre: 'Director',
                apellido: 'Demo',
                email: email || 'director@smartjcp.edu',
                foto: 'https://ui-avatars.com/api/?name=Director+Demo&background=0D8ABC&color=fff',
                role: 'director' // Rol solicitado por el usuario
            };
            const mockToken = 'demo-token-director-123';

            setToken(mockToken);
            setUser(mockUser);
            localStorage.setItem('token', mockToken);
            localStorage.setItem('user', JSON.stringify(mockUser));
            return { success: true, message: 'Modo Director Demo Activado' };
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    const value = {
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
