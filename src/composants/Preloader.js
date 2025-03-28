import logo from '../assets/logos/LgDl.png';

const Preloader = () => {
    return (
        <div className="preload bg-danger d-flex align-items-center justify-content-center">
            
            <img width="250" src={logo} alt="logo_preload"/>

        </div>
    );
};

export default Preloader;