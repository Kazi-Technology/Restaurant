import { useParams } from "react-router-dom";
import data from "../data/categories.json";

function Categorie() {
  const { nomCategorie } = useParams();
  const categorie = data.categories.find((cat) => cat.nom === nomCategorie);
  const elements = data.elements.filter((el) => el.categorie === nomCategorie);

  if (!categorie) {
    return <h2>Catégorie introuvable !</h2>;
  }

  return (
    <div>
      <h2>{categorie.titre}</h2>
      {elements.length > 0 ? (
        <ul>
          {elements.map((el) => (
            <li key={el.id}>
              <h3>{el.nom}</h3>
              <p>{el.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun élément disponible dans cette catégorie.</p>
      )}
    </div>
  );
}

export default Categorie;
