// Composants
import Navbar from '../../composants/Navbar'
import Search from '../../composants/Search.js'
import CategoriesList from '../../composants/CategoriesList'
import Categorie from '../../composants/Categorie.js'
import Panier from '../../composants/Panier.js'
import { useCart } from "../context/CartContexte";

const Home = () => {

    const { addToCart } = useCart();

    return (
        <div>

            {/* <Panier></Panier> */}

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