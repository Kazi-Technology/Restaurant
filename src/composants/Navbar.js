import logo from '../assets/logos/logo.png'

const Navbar = () => {
    return (
        <header className="position-fixed bg-white p-2 menu">
            
            <div className="container d-flex align-items-center justify-content-between ">
                <i class="bi bi-house-fill"></i>

                <a href="index">
                    <img src={logo} alt="logo" />
                </a>

                <div className="position-relative">
                    <p className="et-cmd bg-danger text-white position-absolute">0</p>
                    <i class="bi bi-cart3"></i>
                </div>
            </div>

        </header>
    );
};

export default Navbar;