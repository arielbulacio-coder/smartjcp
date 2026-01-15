import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
        <footer className="footer">
          <p>© 2024 Municipalidad de José C. Paz - Intendencia Mario Alberto Ishi</p>
          <p>Smart JCP - Ciudad del Aprendizaje</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
