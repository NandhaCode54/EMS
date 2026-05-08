import { useEffect, useState } from "react";

import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

function EditEmployee() {

    const { id } = useParams();

    const navigate = useNavigate();

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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) return;
        fetchEmployee();
    }, [id]);

    const fetchEmployee = async () => {
        setLoading(true);
        setError("");

        try {
            const res = await axios.get(
                `http://localhost:5000/employees/${id}`
            );

            setEmployee({
                name: res.data.name || "",
                age: res.data.age || "",
                address: res.data.address || "",
                image: res.data.image || "",
                dob: res.data.dob ? res.data.dob.substring(0, 10) : "",
                education: res.data.education || "",
                college: res.data.college || "",
                package_details: res.data.package_details || "",
                phone: res.data.phone || "",
                email: res.data.email || ""
            });
        } catch (err) {
            console.error(err);
            setError("Failed to load employee data. Please refresh and try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!id) {
            setError("Employee id is missing. Cannot update.");
            return;
        }

        setError("");

        try {
            const updatedEmployee = {
                ...employee,
                dob: employee.dob ? employee.dob.substring(0, 10) : null,
                phone: employee.phone,
                email: employee.email
            };

            await axios.put(
                `http://localhost:5000/employees/${id}`,
                updatedEmployee
            );

            alert("Employee Updated");
            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Update failed. Please check the server and try again.");
        }
    };

    return (

        <div className="container mt-5">

            <div className="card p-4 shadow">

                <h2 className="mb-4 text-center">
                    Edit Employee
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        className="form-control mb-3"
                        placeholder="Name"
                    />

                    <input
                        type="number"
                        name="age"
                        value={employee.age}
                        onChange={handleChange}
                        className="form-control mb-3"
                        placeholder="Age"
                    />

                    <textarea
                        name="address"
                        value={employee.address}
                        onChange={handleChange}
                        className="form-control mb-3"
                        placeholder="Address"
                    ></textarea>

                    <input
                        type="text"
                        name="image"
                        value={employee.image}
                        onChange={handleChange}
                        className="form-control mb-3"
                        placeholder="Image URL"
                    />

                    <input
                        type="date"
                        name="dob"
                        value={employee.dob ? employee.dob.substring(0, 10) : ""}
                        onChange={handleChange}
                        className="form-control mb-3"
                    />

                    <input
                        type="text"
                        name="education"
                        value={employee.education}
                        onChange={handleChange}
                        className="form-control mb-3"
                        placeholder="Education"
                    />

                    <input
                        type="text"
                        name="college"
                        value={employee.college}
                        onChange={handleChange}
                        className="form-control mb-3"
                        placeholder="College"
                    />

                    <input
                        type="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        className="form-control mb-3"
                        placeholder="Email"
                    />

                    <input
                        type="text"
                        name="phone"
                        value={employee.phone}
                        onChange={handleChange}
                        className="form-control mb-3"
                        placeholder="Phone Number"
                    />

                    <input
                        type="text"
                        name="package_details"
                        value={employee.package_details}
                        onChange={handleChange}
                        className="form-control mb-3"
                        placeholder="Package"
                    />

                    {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    className="btn btn-warning w-100"
                    disabled={loading}
                >
                    {loading ? "Loading…" : "Update Employee"}
                </button>

                </form>

            </div>

        </div>
    );
}

export default EditEmployee;