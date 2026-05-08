import Header from "../components/Header";
import Footer from "../components/Footer";
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {

    return (

        <div className="bg-light min-vh-100">

            <Header />

            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <EmployeeForm />

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    );
}

export default AddEmployee;