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