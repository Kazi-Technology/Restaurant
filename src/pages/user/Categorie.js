// Importations composants
import Navbar from '../../composants/Navbar'
import Search from '../../composants/Search.js'
import CategoriesList from '../../composants/CategoriesList'
import Categorie from '../../composants/Categorie.js';

const Home = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Search></Search>

            <div className="container">

            <h1 className="p-2">Catégories</h1>

                <CategoriesList></CategoriesList>
                <Categorie></Categorie>

            </div>

        </div>
    )
};

export default Home;