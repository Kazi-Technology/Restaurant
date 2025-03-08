import './App.css';
import Navbar from './composants/Navbar';
import Categorie from './composants/Categorie'
import Accueil from './composants/Accueil'
import CategoriesList from './composants/CategoriesList';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>

      <Navbar></Navbar>

      <Accueil></Accueil>

      <h1 className="p-1">Catégories</h1>
      <Router>
        <div>
          <CategoriesList></CategoriesList>

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
