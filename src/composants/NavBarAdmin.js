import logo from '../assets/logos/logoBlanc.png'
import { NavLink } from 'react-router-dom';

const NavBarAdmin = () => {
    return (
        <div className="bg-danger d-flex align-items-center p-3 justify-content-between">
            
            

            <div className="d-flex align-items-center gap-3">
                <a href="home"><img width="120" src={logo} alt="logo" /></a>

                <NavLink to="/admin/home" className={({ isActive }) => (isActive ? "p-1 rounded text-danger bg-white fw-bold" : "text-white bg-danger p-1 fw-bold")}>Accueil</NavLink>
                <NavLink to="/admin/stats" className={({ isActive }) => (isActive ? "p-1 rounded text-danger bg-white fw-bold" : "text-white bg-danger p-1 fw-bold")}>Statistiques</NavLink>
            </div>

            <div className="d-flex align-items-center gap-3">

                <h6 className="text-white p-2 mt-1">Jeffren Mokamo</h6>

                <button className="btn btn-success p-2">Se deconnecter</button>

            </div>

        </div>
    );
};

export default NavBarAdmin;