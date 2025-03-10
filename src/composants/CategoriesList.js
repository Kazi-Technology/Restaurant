import { NavLink } from "react-router-dom";
import data from "../data/categories.json";

function CategoriesList() {
  return (
    <nav className="d-flex p-1 align-items-center gap-3 mb-3">
      {data.categories.map((cat) => (
        <NavLink
          key={cat.idcat}
          to={`/categorie/${cat.nomcat}`}
          className={({ isActive }) => (isActive ? "active p-1 rounded bg-danger text-white" : "nav-link p-1 rounded")}
        >
          {cat.nomcat}
        </NavLink>
      ))}
    </nav>
  );
}

export default CategoriesList;
