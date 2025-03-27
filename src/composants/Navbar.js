import logo from '../assets/logos/logo.png'
import { useCart } from "../context/CartContexte";

const Navbar = () => {

    const { cart } = useCart();

    return (
        <header className="bg-white position-fixed p-2 menu mb-5">
            
            <div className="container d-flex align-items-center justify-content-between ">

                <a href="/categorie/">
                    <img src={logo} alt="logo" />
                </a>

                <div className="position-relative">
                    <p className="et-cmd bg-danger text-white position-absolute"> {cart.length}</p>
                    <i class="">🛒</i>
                </div>
            </div>

        </header>
    );
};

export default Navbar;