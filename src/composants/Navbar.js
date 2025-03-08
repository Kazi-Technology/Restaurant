import logo from '../assets/logos/logo.png'

const Navbar = () => {
    return (
        <div className="bg-white p-2">
            
            <div className="container d-flex align-items-center justify-content-between ">
                <i class="bi bi-house-fill"></i>

                <img src={logo} alt="logo" />

                <i class="bi bi-cart3"></i>
            </div>

        </div>
    );
};

export default Navbar;