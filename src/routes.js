import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/AdminLayouts";
import AdminLayout from "./layouts/UsersLayouts";

// Pages User
import Categorie from "./pages/user/Categorie"
import Home from "./pages/user/Home"



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
            <Route path="/categorie/" element={<Categorie />} />
            <Route path="/categorie/:nomCategorie" element={<Categorie />} />
        </Route>

        {/* Routes de l'application admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="home" element={<HomeAdmin />} />
          <Route path="stats" element={<Statistiques />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
