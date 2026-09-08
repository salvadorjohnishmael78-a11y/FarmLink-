import Home from "./pages/landing/Home";
import Login from "./pages/auth/Login";
import FarmerRegistration from "./pages/auth/FarmerRegistration";
import RegistrationSuccess from "./pages/auth/RegistrationSuccess";
import FarmerDashboard from "./pages/farmer/FarmerDashboard";
import RiderDashboard from "./pages/rider/RiderDashboard";
import localProducts from "./data/products";

const API_URL = "http://127.0.0.1:5000/api";

export default function App() {
  const path = window.location.pathname;

  if (path === "/login") return <Login apiUrl={API_URL} />;
  if (path === "/register" || path === "/register/farmer")
    return <FarmerRegistration apiUrl={API_URL} />;
  if (path === "/registration-success") return <RegistrationSuccess />;
  if (path === "/farmer") return <FarmerDashboard apiUrl={API_URL} />;
  if (path === "/rider") return <RiderDashboard apiUrl={API_URL} />;

  return <Home products={localProducts} loadingProducts={false} />;
}