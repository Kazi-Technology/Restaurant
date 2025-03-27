import logo from '../assets/logos/logo.png';

const Preloader = () => {
    return (
        <div className="preload bg-danger d-flex align-items-center justify-content-center">
            
            <img width="150" src={logo} alt="logo_preload"/>

        </div>
    );
};

export default Preloader;