import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

// Pages User
import Home from "./pages/user/Home";


// Pages Admin
import Admin from "./pages/admin/Admin";
import HomeAdmin from "./pages/admin/HomeAdmin";
import Statistiques from "./pages/admin/Statistiques";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Routes de l'application utilisateur */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Routes de l'application admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="/admin/home" element={<HomeAdmin />} />
          <Route path="/admin/stats" element={<Statistiques />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
