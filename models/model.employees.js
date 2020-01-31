'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeesSchema = Schema({
    name: String,
    position: String,
    email: String
    
});

module.exports = mongoose.model('employees', EmployeesSchema);