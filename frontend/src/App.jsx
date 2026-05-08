import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add-employee"
          element={<AddEmployee />}
        />

        <Route
          path="/edit-employee/:id"
          element={<EditEmployee />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;