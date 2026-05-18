import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
} from "react-router-dom";

const API =
  import.meta.env.VITE_API_URL;

function Signup() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signup = async () => {

    try {

      await axios.post(
        `${API}/api/auth/signup`,
        data
      );

      alert("Signup Successful");

      navigate("/");

    } catch (error) {

      alert("Signup Failed");

    }
  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>Create Account</h1>

        <input
          placeholder="Name"
          onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
        />

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

        <button onClick={signup}>
          Signup
        </button>

      </div>

    </div>
  );
}

export default Signup;