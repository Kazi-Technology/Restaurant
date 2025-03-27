// Composants
import Navbar from '../../composants/Navbar'
import { useCart } from "../../context/CartContexte";
import Search from '../../composants/Search.js'
import CategoriesList from '../../composants/CategoriesList'
import Categorie from '../../composants/Categorie.js'
import Panier from '../../composants/Panier.js'

const Home = () => {

    const { cart } = useCart();

    return (
        <div>

            { cart.length > 0 && <Panier /> }

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