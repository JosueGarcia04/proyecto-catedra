import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; 

function MenuPage() {
    return (
      <div className="min-h-screen bg-green-500 flex flex-col items-start justify-center p-8">
        <ul className="text-white text-4xl space-y-6">
          <li className="flex items-center">
            <Link to="/contenedores" className="flex items-center hover:scale-105 transition duration-300 ease-in-out">
              Contenedores <FaArrowRight className="ml-2" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/notificaciones" className="flex items-center hover:scale-105 transition duration-300 ease-in-out">
              Notificaciones <FaArrowRight className="ml-2" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/" className="flex items-center hover:scale-105 transition duration-300 ease-in-out">
              Regresar <FaArrowRight className="ml-2" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }

export default MenuPage