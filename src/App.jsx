import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import MenuPage from './menu';
import Contents from './contenedores';
import Notis from './notificaciones';

function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <img
        src="/src/assets/bote.png"
        alt="Imagen"
        className="w-4/5 max-w-xs h-auto object-cover mb-8"
      />
      <Link to="/menu">
        <button
          className="bg-green-500 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-green-600 hover:scale-105 transition duration-300 ease-in-out"
        >
          Iniciar
        </button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contenedores" element={<Contents/>}/>
        <Route path="/notificaciones" element={<Notis/>}/>
      </Routes>
    </Router>
  );
}

export default App;
