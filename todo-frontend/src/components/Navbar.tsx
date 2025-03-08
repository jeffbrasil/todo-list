import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/register">Cadastro</Link>
        </li>
        <li>
          <Link to="/tasks">Tarefas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
