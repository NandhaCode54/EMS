import Header from "../components/Header";
import Footer from "../components/Footer";
import EmployeeList from "../components/EmployeeList";

function Home() {

    return (

        <div className="bg-light min-vh-100">

            <Header />

            <div className="container py-5">

                <div className="text-center mb-5">

                    <h1 className="fw-bold display-5">
                        Employee Dashboard
                    </h1>

                    <p className="text-muted fs-5">
                        Manage all employee records easily
                    </p>

                </div>

                <EmployeeList />

            </div>

            <Footer />

        </div>
    );
}

export default Home;