import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        fetchEmployees();

    }, []);

    const fetchEmployees = async () => {

        const res = await axios.get(
            "http://localhost:5000/employees"
        );

        setEmployees(res.data);
    };

    const deleteEmployee = async (id) => {

        await axios.delete(
            `http://localhost:5000/employees/${id}`
        );

        fetchEmployees();
    };

    return (

        <div className="row mt-5">

            {
                employees.map((emp) => (

                    <div className="col-md-4 mb-4" key={emp.id}>

                        <div className="card shadow border-0 h-100">

                            <img
                                src={emp.image}
                                alt={emp.name}
                                className="card-img-top"
                                height="250"
                            />

                            <div className="card-body">

                                <h4>{emp.name}</h4>

                                <p>
                                    <strong>Age:</strong> {emp.age}
                                </p>

                                <p>
                                    <strong>Education:</strong> {emp.education}
                                </p>

                                <p>
                                    <strong>College:</strong> {emp.college}
                                </p>

                                <p>
                                    <strong>Email:</strong> {emp.email || "N/A"}
                                </p>

                                <p>
                                    <strong>Phone:</strong> {emp.phone || "N/A"}
                                </p>

                                <p>
                                    <strong>Package:</strong> {emp.package_details}
                                </p>
                                <Link
                                    to={`/edit-employee/${emp.id}`}
                                    className="btn btn-warning w-100 mb-2"
                                >
                                    Edit
                                </Link>

                                <button
                                    className="btn btn-danger w-100"
                                    onClick={() => deleteEmployee(emp.id)}
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>
                ))
            }

        </div>
    );
}

export default EmployeeList;