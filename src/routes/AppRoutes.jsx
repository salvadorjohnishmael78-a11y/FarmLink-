import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/landing/Home";
import FarmerRegistration from "../pages/auth/FarmerRegistration";
import RegistrationSuccess from "../pages/auth/RegistrationSuccess";


function LandingLayout() {
  return (
    <>
      <Navbar />

      <Home />

      <Footer />
    </>
  );
}


export default function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        {/* LANDING PAGE */}

        <Route
          path="/"
          element={<LandingLayout />}
        />


        {/* FARMER REGISTRATION */}

        <Route
          path="/register/farmer"
          element={
            <FarmerRegistration />
          }
        />


        {/* REGISTRATION SUCCESS */}

        <Route
          path="/register/success"
          element={
            <RegistrationSuccess />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}