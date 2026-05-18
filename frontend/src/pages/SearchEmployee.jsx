import { useState } from "react";

import axios from "axios";

const API =
  import.meta.env.VITE_API_URL;

function SearchEmployee() {

  const [department, setDepartment] =
    useState("");

  const [employees, setEmployees] =
    useState([]);

  const searchEmployee = async () => {

    try {

      const res = await axios.get(
        `${API}/api/employees/search?department=${department}`
      );

      setEmployees(res.data);

    } catch (error) {

      alert("Search Failed");

    }
  };

  return (

    <div className="page">

      <h1>Search Employees</h1>

      <div className="search-box">

        <input
          placeholder="Enter Department"
          onChange={(e) =>
            setDepartment(
              e.target.value
            )
          }
        />

        <button onClick={searchEmployee}>
          Search
        </button>

      </div>

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
              {employee.email}
            </p>

            <p>
              {employee.department}
            </p>

            <p>
              Skills:
              {employee.skills.join(", ")}
            </p>

            <p>
              Score:
              {employee.performanceScore}
            </p>

            <p>
              Experience:
              {employee.experience}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default SearchEmployee;