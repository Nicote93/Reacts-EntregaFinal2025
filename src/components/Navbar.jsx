import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex md:flex-row flex-col md:gap-10 gap-8 items-center md:items-center">
        <li>
          <Link 
            to="/Productos" 
            className="text-gray-700 md:text-lg text-2xl font-medium hover:text-black transition-colors duration-200 hover:underline underline-offset-4"
          >
            Todo
          </Link>
        </li>
        <li>
          <Link 
            to="/Computacion" 
            className="text-gray-700 md:text-lg text-2xl font-medium hover:text-black transition-colors duration-200 hover:underline underline-offset-4"
          >
            Computacion
          </Link>
        </li>
        <li>
          <Link 
            to="/AccesoriosCelulares" 
            className="text-gray-700 md:text-lg text-2xl font-medium hover:text-black transition-colors duration-200 hover:underline underline-offset-4"
          >
            Celulares
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;