const EmployeeModel = require("../models/model.employees");

const EmployeeController = {
    saveEmployee: function (req, res) {
        const employee = new EmployeeModel();
        const params = req.body;
        employee.name = params.name;
        employee.position = params.position;
        employee.email = params.email;

        employee.save((err, employeeStored) => {
            if (err) return res.status(500).send({
                message: "Error al guardar"
            });

            if (!employeeStored) return res.status(404).send({
                message: "No se ha podido guardar el trabajador"
            });

            //return res.status(200).send({projectStored});
        });

        return res.status(200).send({
            message: "Se ha guradado correctamente"
        });
    },

    getEmployees: function (req, res) {
        EmployeeModel.find({}).exec((err, employees) => {
            if (err) return res.status(500).send({
                message: "Error al devolver los datos"
            });
            if (!employees) return res.status(404).send({
                message: "No se han encontrado los proyectos"
            });
            return res.status(200).send({
                employees
            });
        });

    },

    updateEmployee: function (req, res) {
        const employeeId = req.body._id;
        const employee = req.body;

        EmployeeModel.findByIdAndUpdate(employeeId, employee, (err, employeeUpdated) => {
            if (err) return res.status(500).send({
                message: "Error al actualizar"
            });
            if (!employeeUpdated) return res.status(404).send({
                message: "No existe el trabajador que desea actualizar"
            });

            return res.status(200).send({
                project: employeeUpdated
            });
        });

    },

    deleteEmployee: function (req, res) {
        let employeeId = req.params.id;

        EmployeeModel.findByIdAndDelete(employeeId, (err, employeeDeleted) => {
            if (err) return res.status(500).send({
                message: "Error al borrar"
            });
            if (!employeeDeleted) return res.status(404).send({
                message: "No existe el trabajador que desea borrar"
            });

            return res.status(200).send({
                project: employeeDeleted
            });
        });
    }
};

module.exports = EmployeeController;