import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  import.meta.env.VITE_API_URL;

function AIRecommendation() {

  const [employees, setEmployees] =
    useState([]);

  const [selectedEmployee,
    setSelectedEmployee] =
      useState(null);

  const [recommendation,
    setRecommendation] =
      useState("");

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    const res = await axios.get(
      `${API}/api/employees`
    );

    setEmployees(res.data);

  };

  const generateAI = async () => {

  if (!selectedEmployee) {

    alert("Please Select Employee");

    return;
  }

  try {

    const res = await axios.post(
      `${API}/api/ai/recommend`,
      selectedEmployee,
      {
        headers: {
          Authorization:
            `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setRecommendation(
      res.data.recommendation
    );

  } catch (error) {

    console.log(error);

    alert(
      "AI Recommendation Failed"
    );

  }
};

  return (

    <div className="page">

      <h1>AI Recommendation</h1>

      <select
        className="dropdown"
        onChange={(e) =>
          setSelectedEmployee(
            employees.find(
              (emp) =>
                emp._id ===
                e.target.value
            )
          )
        }
      >

        <option value="">
          Select Employee
        </option>

        {employees.map((employee) => (

          <option
            key={employee._id}
            value={employee._id}
          >
            {employee.name}
          </option>
        ))}

      </select>

      <button onClick={generateAI}>
        Generate AI Insights
      </button>

      {recommendation && (

        <div className="ai-box">

          <h2>AI Insights</h2>

          <p>
            {recommendation}
          </p>

        </div>
      )}

    </div>
  );
}

export default AIRecommendation;