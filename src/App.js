import './App.css';
import Navbar from './composants/Navbar';
import Categorie from './composants/Categorie'
import Accueil from './composants/Accueil';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div>

      <Navbar></Navbar>

      <Accueil></Accueil>
      <Router>
        <div>
          <h1 className="mb-3 p-1">Catégories</h1>

          {/* Navigation avec Link pour éviter le rechargement */}
          <nav className="d-flex gap-3 mb-3 p-1">
            <NavLink to="/categorie/categorie1" className="nav-link">catégorie 1</NavLink> 
            <NavLink to="/categorie/categorie2" className="nav-link">catégorie 2</NavLink> 
            <NavLink to="/categorie/categorie3" className="nav-link">catégorie 3</NavLink> 
            <NavLink to="/categorie/categorie4" className="nav-link">catégorie 4</NavLink>
          </nav>

          {/* Définition des routes */}
          <Routes>
            <Route path="/categorie/:nomCategorie" element={<Categorie/>} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
