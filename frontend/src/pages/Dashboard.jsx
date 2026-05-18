import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  import.meta.env.VITE_API_URL;

function Dashboard() {

  const [employees, setEmployees] =
    useState([]);

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    const res = await axios.get(
      `${API}/api/employees`
    );

    setEmployees(res.data);

  };

  return (

    <div className="page">

      <h1>Dashboard</h1>

      <div className="grid">

        {employees.map((employee) => (

          <div
            className="employee-card"
            key={employee._id}
          >

            <h2>
              {employee.name}
            </h2>

            <p>
              {employee.department}
            </p>

            <p>
              Score:
              {employee.performanceScore}
            </p>

            <p>
              Experience:
              {employee.experience}
              years
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Dashboard;