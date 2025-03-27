// Importations composants
import Navbar from '../../composants/Navbar'
import Categorie from '../../composants/Categorie'
import Search from '../../composants/Search'
import CategoriesList from '../../composants/CategoriesList'

//React-Router
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const Home = () => {
    return (
        <div>

            <Navbar></Navbar>

            <Search></Search>

            <div className="container">

                <h1 className="p-2">Catégories</h1>
                <Router>
                    
                    <CategoriesList></CategoriesList>
                    {/* Définition des routes */}
                    <Routes>
                        <Route path="/categorie/:nomCategorie" element={<Categorie/>} />
                        <Route path="/" element={<Categorie/>}/>
                    </Routes>
                    
                </Router>

            </div>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;