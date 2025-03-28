import NavBarAdmin from "../../composants/NavBarAdmin"
import SearchAdmin from "../../composants/SearchAdmin";

const HomeAdmin = () => {
    return (
        <div>
            <NavBarAdmin></NavBarAdmin>

            <SearchAdmin></SearchAdmin>

            <div className="d-flex gap-3">

                
                <div className="form-ajout-modif"></div>

            </div>
        </div>
    );
};

export default HomeAdmin;