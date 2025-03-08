import logo from '../assets/logos/logo.png'

const Navbar = () => {
    return (
        <div className="container bg-white d-flex align-items-center justify-content-between p-2">
            
            <i class="bi bi-house-fill"></i>

            <img src={logo} alt="logo" />

            <i class="bi bi-cart3"></i>

        </div>
    );
};

export default Navbar;