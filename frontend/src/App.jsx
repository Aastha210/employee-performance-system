// // // // import { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import "./App.css";

// // // // const API = import.meta.env.VITE_API_URL;

// // // // function App() {

// // // //   const [employees, setEmployees] = useState([]);

// // // //   const [recommendation, setRecommendation] =
// // // //     useState("");

// // // //   const [token, setToken] = useState(
// // // //     localStorage.getItem("token") || ""
// // // //   );

// // // //   const [signupData, setSignupData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     password: "",
// // // //   });

// // // //   const [loginData, setLoginData] = useState({
// // // //     email: "",
// // // //     password: "",
// // // //   });

// // // //   const [employeeData, setEmployeeData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     department: "",
// // // //     skills: "",
// // // //     performanceScore: "",
// // // //     experience: "",
// // // //   });

// // // //   const [department, setDepartment] = useState("");

// // // //   useEffect(() => {
// // // //     fetchEmployees();
// // // //   }, []);

// // // //   const fetchEmployees = async () => {
// // // //     const res = await axios.get(
// // // //       `${API}/api/employees`
// // // //     );

// // // //     setEmployees(res.data);
// // // //   };

// // // //   const signup = async () => {
// // // //     await axios.post(
// // // //       `${API}/api/auth/signup`,
// // // //       signupData
// // // //     );

// // // //     alert("Signup Successful");
// // // //   };

// // // //   const login = async () => {

// // // //     const res = await axios.post(
// // // //       `${API}/api/auth/login`,
// // // //       loginData
// // // //     );

// // // //     localStorage.setItem("token", res.data.token);

// // // //     setToken(res.data.token);

// // // //     alert("Login Successful");
// // // //   };

// // // //   const addEmployee = async (e) => {
// // // //     e.preventDefault();

// // // //     await axios.post(
// // // //       `${API}/api/employees`,
// // // //       {
// // // //         ...employeeData,
// // // //         skills: JSON.parse(employeeData.skills),
// // // //       },
// // // //       {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );

// // // //     fetchEmployees();

// // // //     alert("Employee Added");
// // // //   };

// // // //   const searchEmployee = async () => {

// // // //     const res = await axios.get(
// // // //       `${API}/api/employees/search?department=${department}`
// // // //     );

// // // //     setEmployees(res.data);
// // // //   };

// // // //   const deleteEmployee = async (id) => {

// // // //     await axios.delete(
// // // //       `${API}/api/employees/${id}`,
// // // //       {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );

// // // //     fetchEmployees();
// // // //   };

// // // //   const getAI = async (employee) => {

// // // //     const res = await axios.post(
// // // //       `${API}/api/ai/recommend`,
// // // //       employee,
// // // //       {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );

// // // //     setRecommendation(res.data.recommendation);
// // // //   };

// // // //   return (
// // // //     <div className="container">

// // // //       <h1>
// // // //         AI Employee Performance System
// // // //       </h1>

// // // //       <div className="card">
// // // //         <h2>Signup</h2>

// // // //         <input
// // // //           placeholder="Name"
// // // //           onChange={(e) =>
// // // //             setSignupData({
// // // //               ...signupData,
// // // //               name: e.target.value,
// // // //             })
// // // //           }
// // // //         />

// // // //         <input
// // // //           placeholder="Email"
// // // //           onChange={(e) =>
// // // //             setSignupData({
// // // //               ...signupData,
// // // //               email: e.target.value,
// // // //             })
// // // //           }
// // // //         />

// // // //         <input
// // // //           type="password"
// // // //           placeholder="Password"
// // // //           onChange={(e) =>
// // // //             setSignupData({
// // // //               ...signupData,
// // // //               password: e.target.value,
// // // //             })
// // // //           }
// // // //         />

// // // //         <button onClick={signup}>
// // // //           Signup
// // // //         </button>
// // // //       </div>

// // // //       <div className="card">
// // // //         <h2>Login</h2>

// // // //         <input
// // // //           placeholder="Email"
// // // //           onChange={(e) =>
// // // //             setLoginData({
// // // //               ...loginData,
// // // //               email: e.target.value,
// // // //             })
// // // //           }
// // // //         />

// // // //         <input
// // // //           type="password"
// // // //           placeholder="Password"
// // // //           onChange={(e) =>
// // // //             setLoginData({
// // // //               ...loginData,
// // // //               password: e.target.value,
// // // //             })
// // // //           }
// // // //         />

// // // //         <button onClick={login}>
// // // //           Login
// // // //         </button>
// // // //       </div>

// // // //       <form onSubmit={addEmployee}>

// // // //         <h2>Add Employee</h2>

// // // //         <input
// // // //           placeholder="Name"
// // // //           onChange={(e) =>
// // // //             setEmployeeData({
// // // //               ...employeeData,
// // // //               name: e.target.value,
// // // //             })
// // // //           }
// // // //         />

// // // //         <input
// // // //           placeholder="Email"
// // // //           onChange={(e) =>
// // // //             setEmployeeData({
// // // //               ...employeeData,
// // // //               email: e.target.value,
// // // //             })
// // // //           }
// // // //         />

// // // //         <input
// // // //           placeholder="Department"
// // // //           onChange={(e) =>
// // // //             setEmployeeData({
// // // //               ...employeeData,
// // // //               department: e.target.value,
// // // //             })
// // // //           }
// // // //         />

// // // //         <input
// // // //           placeholder="Skills"
// // // //           onChange={(e) =>
// // // //             setEmployeeData({
// // // //               ...employeeData,
// // // //               skills: e.target.value,
// // // //             })
// // // //           }
// // // //         />

// // // //         <input
// // // //           placeholder="Performance Score"
// // // //           type="number"
// // // //           onChange={(e) =>
// // // //             setEmployeeData({
// // // //               ...employeeData,
// // // //               performanceScore: e.target.value,
// // // //             })
// // // //           }
// // // //         />

// // // //         <input
// // // //           placeholder="Experience"
// // // //           type="number"
// // // //           onChange={(e) =>
// // // //             setEmployeeData({
// // // //               ...employeeData,
// // // //               experience: e.target.value,
// // // //             })
// // // //           }
// // // //         />

// // // //         <button type="submit">
// // // //           Add Employee
// // // //         </button>
// // // //       </form>

// // // //       <div className="card">

// // // //         <h2>Search Employee</h2>

// // // //         <input
// // // //           placeholder="Department"
// // // //           onChange={(e) =>
// // // //             setDepartment(e.target.value)
// // // //           }
// // // //         />

// // // //         <button onClick={searchEmployee}>
// // // //           Search
// // // //         </button>

// // // //         <button onClick={fetchEmployees}>
// // // //           Reset
// // // //         </button>
// // // //       </div>

// // // //       <h2>Employee List</h2>

// // // //       {employees.map((employee) => (
// // // //         <div key={employee._id} className="card">

// // // //           <h3>{employee.name}</h3>

// // // //           <p>Email: {employee.email}</p>

// // // //           <p>
// // // //             Department:
// // // //             {employee.department}
// // // //           </p>

// // // //           <p>
// // // //             Skills:
// // // //             {employee.skills.join(", ")}
// // // //           </p>

// // // //           <p>
// // // //             Score:
// // // //             {employee.performanceScore}
// // // //           </p>

// // // //           <p>
// // // //             Experience:
// // // //             {employee.experience}
// // // //           </p>

// // // //           <button
// // // //             onClick={() => getAI(employee)}
// // // //           >
// // // //             AI Recommendation
// // // //           </button>

// // // //           <button
// // // //             onClick={() =>
// // // //               deleteEmployee(employee._id)
// // // //             }
// // // //           >
// // // //             Delete
// // // //           </button>
// // // //         </div>
// // // //       ))}

// // // //       {recommendation && (
// // // //         <div className="ai-box">

// // // //           <h2>AI Recommendation</h2>

// // // //           <p>{recommendation}</p>

// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;
// // // import { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import "./App.css";

// // // const API = import.meta.env.VITE_API_URL;

// // // function App() {

// // //   const [employees, setEmployees] = useState([]);
// // //   const [recommendation, setRecommendation] =
// // //     useState("");

// // //   const [token, setToken] = useState(
// // //     localStorage.getItem("token") || ""
// // //   );

// // //   const [signupData, setSignupData] = useState({
// // //     name: "",
// // //     email: "",
// // //     password: "",
// // //   });

// // //   const [loginData, setLoginData] = useState({
// // //     email: "",
// // //     password: "",
// // //   });

// // //   const [employeeData, setEmployeeData] =
// // //     useState({
// // //       name: "",
// // //       email: "",
// // //       department: "",
// // //       skills: "",
// // //       performanceScore: "",
// // //       experience: "",
// // //     });

// // //   const [department, setDepartment] =
// // //     useState("");

// // //   useEffect(() => {
// // //     fetchEmployees();
// // //   }, []);

// // //   const fetchEmployees = async () => {

// // //     try {

// // //       const res = await axios.get(
// // //         `${API}/api/employees`
// // //       );

// // //       setEmployees(res.data);

// // //     } catch (error) {

// // //       console.log(error);

// // //     }
// // //   };

// // //   const signup = async () => {

// // //     try {

// // //       await axios.post(
// // //         `${API}/api/auth/signup`,
// // //         signupData
// // //       );

// // //       alert("Signup Successful");

// // //     } catch (error) {

// // //       console.log(error);

// // //       alert("Signup Failed");

// // //     }
// // //   };

// // //   const login = async () => {

// // //     try {

// // //       const res = await axios.post(
// // //         `${API}/api/auth/login`,
// // //         loginData
// // //       );

// // //       localStorage.setItem(
// // //         "token",
// // //         res.data.token
// // //       );

// // //       setToken(res.data.token);

// // //       alert("Login Successful");

// // //     } catch (error) {

// // //       console.log(error);

// // //       alert("Login Failed");

// // //     }
// // //   };

// // //   const addEmployee = async (e) => {

// // //     e.preventDefault();

// // //     try {

// // //       await axios.post(
// // //         `${API}/api/employees`,
// // //         {
// // //           ...employeeData,

// // //           skills: JSON.parse(
// // //             employeeData.skills
// // //           ),

// // //           performanceScore: Number(
// // //             employeeData.performanceScore
// // //           ),

// // //           experience: Number(
// // //             employeeData.experience
// // //           ),
// // //         },
// // //         {
// // //           headers: {
// // //             Authorization:
// // //               `Bearer ${token}`,
// // //           },
// // //         }
// // //       );

// // //       alert("Employee Added");

// // //       fetchEmployees();

// // //     } catch (error) {

// // //       console.log(error);

// // //       alert("Employee Add Failed");

// // //     }
// // //   };

// // //   const searchEmployee = async () => {

// // //     try {

// // //       const res = await axios.get(
// // //         `${API}/api/employees/search?department=${department}`
// // //       );

// // //       setEmployees(res.data);

// // //     } catch (error) {

// // //       console.log(error);

// // //     }
// // //   };

// // //   const deleteEmployee = async (id) => {

// // //     try {

// // //       await axios.delete(
// // //         `${API}/api/employees/${id}`,
// // //         {
// // //           headers: {
// // //             Authorization:
// // //               `Bearer ${token}`,
// // //           },
// // //         }
// // //       );

// // //       fetchEmployees();

// // //     } catch (error) {

// // //       console.log(error);

// // //     }
// // //   };

// // //   const getAI = async (employee) => {

// // //     try {

// // //       const res = await axios.post(
// // //         `${API}/api/ai/recommend`,
// // //         employee,
// // //         {
// // //           headers: {
// // //             Authorization:
// // //               `Bearer ${token}`,
// // //           },
// // //         }
// // //       );

// // //       setRecommendation(
// // //         res.data.recommendation
// // //       );

// // //     } catch (error) {

// // //       console.log(error);

// // //       alert("AI Failed");

// // //     }
// // //   };

// // //   return (
// // //     <div className="container">

// // //       <h1>
// // //         AI Employee Performance System
// // //       </h1>

// // //       <div className="card">

// // //         <h2>Signup</h2>

// // //         <input
// // //           placeholder="Name"
// // //           onChange={(e) =>
// // //             setSignupData({
// // //               ...signupData,
// // //               name: e.target.value,
// // //             })
// // //           }
// // //         />

// // //         <input
// // //           placeholder="Email"
// // //           onChange={(e) =>
// // //             setSignupData({
// // //               ...signupData,
// // //               email: e.target.value,
// // //             })
// // //           }
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           onChange={(e) =>
// // //             setSignupData({
// // //               ...signupData,
// // //               password: e.target.value,
// // //             })
// // //           }
// // //         />

// // //         <button onClick={signup}>
// // //           Signup
// // //         </button>
// // //       </div>

// // //       <div className="card">

// // //         <h2>Login</h2>

// // //         <input
// // //           placeholder="Email"
// // //           onChange={(e) =>
// // //             setLoginData({
// // //               ...loginData,
// // //               email: e.target.value,
// // //             })
// // //           }
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           onChange={(e) =>
// // //             setLoginData({
// // //               ...loginData,
// // //               password: e.target.value,
// // //             })
// // //           }
// // //         />

// // //         <button onClick={login}>
// // //           Login
// // //         </button>
// // //       </div>

// // //       <form onSubmit={addEmployee}>

// // //         <h2>Add Employee</h2>

// // //         <input
// // //           placeholder="Name"
// // //           onChange={(e) =>
// // //             setEmployeeData({
// // //               ...employeeData,
// // //               name: e.target.value,
// // //             })
// // //           }
// // //         />

// // //         <input
// // //           placeholder="Email"
// // //           onChange={(e) =>
// // //             setEmployeeData({
// // //               ...employeeData,
// // //               email: e.target.value,
// // //             })
// // //           }
// // //         />

// // //         <input
// // //           placeholder="Department"
// // //           onChange={(e) =>
// // //             setEmployeeData({
// // //               ...employeeData,
// // //               department: e.target.value,
// // //             })
// // //           }
// // //         />

// // //         <input
// // //           placeholder='["React","Node.js"]'
// // //           onChange={(e) =>
// // //             setEmployeeData({
// // //               ...employeeData,
// // //               skills: e.target.value,
// // //             })
// // //           }
// // //         />

// // //         <input
// // //           type="number"
// // //           placeholder="Performance Score"
// // //           onChange={(e) =>
// // //             setEmployeeData({
// // //               ...employeeData,
// // //               performanceScore:
// // //                 e.target.value,
// // //             })
// // //           }
// // //         />

// // //         <input
// // //           type="number"
// // //           placeholder="Experience"
// // //           onChange={(e) =>
// // //             setEmployeeData({
// // //               ...employeeData,
// // //               experience:
// // //                 e.target.value,
// // //             })
// // //           }
// // //         />

// // //         <button type="submit">
// // //           Add Employee
// // //         </button>

// // //       </form>

// // //       <div className="card">

// // //         <h2>Search Employee</h2>

// // //         <input
// // //           placeholder="Department"
// // //           onChange={(e) =>
// // //             setDepartment(
// // //               e.target.value
// // //             )
// // //           }
// // //         />

// // //         <button onClick={searchEmployee}>
// // //           Search
// // //         </button>

// // //         <button onClick={fetchEmployees}>
// // //           Reset
// // //         </button>

// // //       </div>

// // //       <h2>Employee List</h2>

// // //       {employees.map((employee) => (

// // //         <div
// // //           key={employee._id}
// // //           className="card"
// // //         >

// // //           <h3>{employee.name}</h3>

// // //           <p>{employee.email}</p>

// // //           <p>{employee.department}</p>

// // //           <p>
// // //             {employee.skills.join(", ")}
// // //           </p>

// // //           <p>
// // //             Score:
// // //             {employee.performanceScore}
// // //           </p>

// // //           <p>
// // //             Experience:
// // //             {employee.experience}
// // //           </p>

// // //           <button
// // //             onClick={() =>
// // //               getAI(employee)
// // //             }
// // //           >
// // //             AI Recommendation
// // //           </button>

// // //           <button
// // //             onClick={() =>
// // //               deleteEmployee(
// // //                 employee._id
// // //               )
// // //             }
// // //           >
// // //             Delete
// // //           </button>

// // //         </div>
// // //       ))}

// // //       {recommendation && (

// // //         <div className="ai-box">

// // //           <h2>
// // //             AI Recommendation
// // //           </h2>

// // //           <p>{recommendation}</p>

// // //         </div>
// // //       )}

// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";

// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// // import Dashboard from "./pages/Dashboard";
// // import AddEmployee from "./pages/AddEmployee";
// // import SearchEmployee from "./pages/SearchEmployee";
// // import AIRecommendation from "./pages/AIRecommendation";
// // import ProtectedRoute from "./components/ProtectedRoute";

// // function App() {
// //   return (
// //     <BrowserRouter>

// //       <Navbar />

// //       <Routes>

// //         <Route path="/" element={<Login />} />

// //         <Route path="/signup" element={<Signup />} />

// //         <Route
// //           path="/dashboard"
// //           element={
// //             <ProtectedRoute>
// //               <Dashboard />
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route
// //           path="/add-employee"
// //           element={
// //             <ProtectedRoute>
// //               <AddEmployee />
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route
// //           path="/search"
// //           element={
// //             <ProtectedRoute>
// //               <SearchEmployee />
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route
// //           path="/ai"
// //           element={
// //             <ProtectedRoute>
// //               <AIRecommendation />
// //             </ProtectedRoute>
// //           }
// //         />

// //       </Routes>

// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import AddEmployee from "./pages/AddEmployee";
// import SearchEmployee from "./pages/SearchEmployee";
// import AIRecommendation from "./pages/AIRecommendation";

// import ProtectedRoute from "./components/ProtectedRoute";

// import "./App.css";

// function App() {

//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>

//         <Route path="/" element={<Login />} />

//         <Route
//           path="/signup"
//           element={<Signup />}
//         />

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/add-employee"
//           element={
//             <ProtectedRoute>
//               <AddEmployee />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/search"
//           element={
//             <ProtectedRoute>
//               <SearchEmployee />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/ai"
//           element={
//             <ProtectedRoute>
//               <AIRecommendation />
//             </ProtectedRoute>
//           }
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import SearchEmployee from "./pages/SearchEmployee";
import AIRecommendation from "./pages/AIRecommendation";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-employee"
          element={
            <ProtectedRoute>
              <AddEmployee />
            </ProtectedRoute>
          }
        />

        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchEmployee />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai"
          element={
            <ProtectedRoute>
              <AIRecommendation />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;