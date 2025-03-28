import NavBarAdmin from "../../composants/NavBarAdmin"
import SearchAdmin from "../../composants/SearchAdmin"
import TableProduits from "../../composants/TableProduits";

const HomeAdmin = () => {
    return (
        <div>
            <NavBarAdmin></NavBarAdmin>

            <SearchAdmin></SearchAdmin>

            <div className="p-3">

                <div className="w-100"> 
                    <TableProduits></TableProduits>
                </div>

                <div className="form-ajout-modif"></div>

            </div>
        </div>
    );
};

export default HomeAdmin;