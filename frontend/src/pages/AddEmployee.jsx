import { useState } from "react";

import axios from "axios";

const API =
  import.meta.env.VITE_API_URL;

function AddEmployee() {

  const [data, setData] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: "",
  });

  const addEmployee = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        `${API}/api/employees`,
        {
          ...data,

          skills: JSON.parse(
            data.skills
          ),

          performanceScore: Number(
            data.performanceScore
          ),

          experience: Number(
            data.experience
          ),
        },
        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert(
        "Employee Added Successfully"
      );

      setData({
        name: "",
        email: "",
        department: "",
        skills: "",
        performanceScore: "",
        experience: "",
      });

    } catch (error) {

      alert("Failed to Add Employee");

    }
  };

  return (

    <div className="page">

      <div className="form-container">

        <h1>Add Employee</h1>

        <form onSubmit={addEmployee}>

          <input
            placeholder="Name"
            value={data.name}
            onChange={(e) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />

          <input
            placeholder="Department"
            value={data.department}
            onChange={(e) =>
              setData({
                ...data,
                department:
                  e.target.value,
              })
            }
          />

          <input
            placeholder='["React","Node.js"]'
            value={data.skills}
            onChange={(e) =>
              setData({
                ...data,
                skills: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Performance Score"
            value={data.performanceScore}
            onChange={(e) =>
              setData({
                ...data,
                performanceScore:
                  e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Experience"
            value={data.experience}
            onChange={(e) =>
              setData({
                ...data,
                experience:
                  e.target.value,
              })
            }
          />

          <button type="submit">
            Add Employee
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddEmployee;