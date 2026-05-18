import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

const API =
  import.meta.env.VITE_API_URL;

function Login() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const login = async () => {

    try {

      const res = await axios.post(
        `${API}/api/auth/login`,
        data
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    } catch (error) {

      alert("Login Failed");

    }
  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>Login</h1>

        <input
          placeholder="Email"
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
        />

        <button onClick={login}>
          Login
        </button>

        <p>
          No account?
          <Link to="/signup">
            Signup
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;