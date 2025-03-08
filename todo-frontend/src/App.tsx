import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // <-- Importamos o Navbar
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TaskListPage from "./pages/TaskListPage";

function App() {
  return (
    <Router>
      <Navbar /> {/* Adicionamos o Navbar aqui */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<TaskListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
