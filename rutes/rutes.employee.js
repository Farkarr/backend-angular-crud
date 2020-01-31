'use strict'

const express = require('express');
const EmployeeController = require('../controllers/controller.employee');
const router = express.Router();

//Employees router
router.post("/save-employee", EmployeeController.saveEmployee);
router.get("/employees", EmployeeController.getEmployees);
router.put("/update-employee", EmployeeController.updateEmployee);
router.delete("/delete-employee/:id", EmployeeController.deleteEmployee);

module.exports = router;