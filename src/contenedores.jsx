import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; 

function Contents() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowAlert(true); 
  };

  const closeAlert = () => {
    setShowAlert(false); 
  };

  return (
    <div className="min-h-screen bg-green-500 flex flex-col items-start justify-center p-8">
      {showAlert && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-yellow-300 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg shadow-md z-50">
          <div className="flex items-center justify-between">
            <span>No hay elementos</span>
            <button onClick={closeAlert} className="ml-4 text-yellow-700 hover:text-yellow-900">
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="text-white text-5xl mb-4">
        Estado del contenedor general: Vacío
      </div>

      <ul className="text-white text-5xl space-y-6">
        <li className="flex items-center">
          <Link to="#" onClick={handleClick} className="flex items-center hover:scale-105 transition duration-300 ease-in-out">
            Carton (0%)<FaArrowRight className="ml-2" />
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="#" onClick={handleClick} className="flex items-center hover:scale-105 transition duration-300 ease-in-out">
            Plastico (0%)<FaArrowRight className="ml-2" />
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="#" onClick={handleClick} className="flex items-center hover:scale-105 transition duration-300 ease-in-out">
            Latas (0%)<FaArrowRight className="ml-2" />
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="/menu" className="flex items-center hover:scale-105 transition duration-300 ease-in-out">
            Regresar <FaArrowRight className="ml-2" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Contents;
