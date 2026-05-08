import { useState } from "react";
import axios from "axios";

function EmployeeForm() {

    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        address: "",
        image: "",
        dob: "",
        education: "",
        college: "",
        package_details: "",
        phone: "",
        email: ""
    });

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.post(
            "http://localhost:5000/employees",
            employee
        );

        alert("Employee Added");

        window.location.reload();
    };

    return (

        <div className="card shadow-lg border-0 p-4">

            <h3 className="text-center mb-4">
                Add Employee
            </h3>

            <form onSubmit={handleSubmit}>

                <div className="row">

                    <div className="col-md-6 mb-3">

                        <input
                            type="text"
                            name="name"
                            placeholder="Employee Name"
                            className="form-control"
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            className="form-control"
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            type="date"
                            name="dob"
                            className="form-control"
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            type="text"
                            name="education"
                            placeholder="Education"
                            className="form-control"
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            type="text"
                            name="college"
                            placeholder="College"
                            className="form-control"
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="form-control"
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            type="text"
                            name="package_details"
                            placeholder="Package"
                            className="form-control"
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-12 mb-3">

                        <textarea
                            name="address"
                            placeholder="Address"
                            className="form-control"
                            rows="3"
                            onChange={handleChange}
                        ></textarea>

                    </div>

                    <div className="col-12 mb-4">

                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            className="form-control"
                            onChange={handleChange}
                        />

                    </div>

                </div>

                <button className="btn btn-primary w-100">
                    Add Employee
                </button>

            </form>

        </div>
    );
}

export default EmployeeForm;