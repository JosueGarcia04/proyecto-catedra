import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; 
import './index.css';

function HomePage() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/menu'); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <img
        src="/src/assets/bote.png"
        alt="Imagen"
        className="w-4/5 max-w-xs h-auto object-cover mb-8"
      />
      <button
        className="bg-green-500 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
        onClick={handleStartClick}
      >
        Iniciar
      </button>
    </div>
  );
}

function MenuPage() {
  return (
    <div className="min-h-screen bg-green-500 flex flex-col items-start justify-center p-8">
      <ul className="text-white text-2xl space-y-6">
        <li className="flex items-center">
          Contenedores <FaArrowRight className="ml-2" />
        </li>
        <li className="flex items-center">
          Notificaciones <FaArrowRight className="ml-2" />
        </li>
        <li className="flex items-center">
          Regresar <FaArrowRight className="ml-2" />
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
