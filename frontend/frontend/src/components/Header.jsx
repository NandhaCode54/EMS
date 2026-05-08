import { Link } from "react-router-dom";

function Header() {

    const handleExit = () => {

        window.close();

        alert("Close the browser tab manually");
    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

            <div className="container">

                <Link className="navbar-brand fw-bold fs-4" to="/">
                    ABC Technologies
                </Link>

                <div className="d-flex gap-2">

                    <Link
                        to="/"
                        className="btn btn-outline-light"
                    >
                        Home
                    </Link>

                    <Link
                        to="/add-employee"
                        className="btn btn-primary"
                    >
                        Add Employee
                    </Link>

                    <button
                        className="btn btn-danger"
                        onClick={handleExit}
                    >
                        Exit
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default Header;