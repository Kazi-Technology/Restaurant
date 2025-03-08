import { NavLink } from "react-router-dom";
import data from "../data/categories.json";

function CategoriesList() {
  return (
    <nav className="d-flex p-2 align-items-center gap-3 mb-3">
      {data.categories.map((cat) => (
        <NavLink
          key={cat.nom}
          to={`/categorie/${cat.nom}`}
          className={({ isActive }) => (isActive ? "active p-1 rounded bg-info text-white" : "nav-link p-1 rounded")}
        >
          {cat.titre}
        </NavLink>
      ))}
    </nav>
  );
}

export default CategoriesList;
