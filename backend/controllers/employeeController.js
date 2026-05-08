const db = require("../config/db");


// GET ALL EMPLOYEES
exports.getEmployees = (req, res) => {

    const sql = "SELECT * FROM employees";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};
exports.getEmployeeById = (req, res) => {

    const { id } = req.params;

    const sql = "SELECT * FROM employees WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result[0]);
    });
};

// ADD EMPLOYEE
exports.addEmployee = (req, res) => {

    const {
        name,
        age,
        address,
        image,
        dob,
        education,
        college,
        package_details,
        phone,
        email
    } = req.body;

    const sql = `
        INSERT INTO employees
        (name, age, address, image, dob, education, college, package_details, phone, email)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            name,
            age,
            address,
            image,
            dob,
            education,
            college,
            package_details,
            phone,
            email
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Employee Added Successfully"
            });
        }
    );
};


// UPDATE EMPLOYEE
exports.updateEmployee = (req, res) => {

    const { id } = req.params;

    const {
        name,
        age,
        address,
        image,
        dob,
        education,
        college,
        package_details,
        phone,
        email
    } = req.body;

    const sql = `
        UPDATE employees
        SET
        name=?,
        age=?,
        address=?,
        image=?,
        dob=?,
        education=?,
        college=?,
        package_details=?,
        phone=?,
        email=?
        WHERE id=?
    `;

    db.query(
        sql,
        [
            name,
            age,
            address,
            image,
            dob,
            education,
            college,
            package_details,
            phone,
            email,
            id
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Employee Updated Successfully"
            });
        }
    );
};


// DELETE EMPLOYEE
exports.deleteEmployee = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM employees WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Employee Deleted Successfully"
        });
    });
};