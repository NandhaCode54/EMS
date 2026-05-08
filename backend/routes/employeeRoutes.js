const express = require("express");

const router = express.Router();

const {
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById
} = require("../controllers/employeeController");


router.get("/", getEmployees);

router.get("/:id", getEmployeeById);

router.post("/", addEmployee);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

module.exports = router;