import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <nav className="navbar">

      <h2>AI Employee System</h2>

      <div>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/add-employee">
          Add Employee
        </Link>

        <Link to="/search">
          Search
        </Link>

        <Link to="/ai">
          AI
        </Link>

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;