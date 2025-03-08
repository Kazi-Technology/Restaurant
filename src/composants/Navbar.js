import logo from '../assets/logos/logo.png'

const Navbar = () => {
    return (
        <header className="bg-white p-2 menu">
            
            <div className="container d-flex align-items-center justify-content-between ">
                <i class="bi bi-house-fill"></i>

                <a href="index">
                    <img src={logo} alt="logo" />
                </a>

                <i class="bi bi-cart3"></i>
            </div>

        </header>
    );
};

export default Navbar;