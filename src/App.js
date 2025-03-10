import './App.css';
import Navbar from './composants/Navbar';
import Categorie from './composants/Categorie'
import Search from './composants/Search'
import Footer from './composants/Footer'
import CategoriesList from './composants/CategoriesList';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>

      <Navbar></Navbar>

      <Search></Search>

      <div className="container">

        <h1>Catégories</h1>
        <Router>
          
            <CategoriesList></CategoriesList>
            {/* Définition des routes */}
            <Routes>
              <Route path="/categorie/:nomCategorie" element={<Categorie/>} />
            </Routes>
          
        </Router>

      </div>

      

      <Footer></Footer>

    </div>
  );
}

export default App;
