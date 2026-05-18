const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  addEmployee,
  getEmployees,
  searchEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

router.post("/", auth, addEmployee);

router.get("/", getEmployees);

router.get("/search", searchEmployee);

router.put("/:id", auth, updateEmployee);

router.delete("/:id", auth, deleteEmployee);

module.exports = router;