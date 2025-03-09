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
    <div className="p-4">

      <h5>{categorie.titre}</h5>
      <div className="plats d-flex">
        {elements.length > 0 ? (
            elements.map((el) => (
              <div key={el.id} className="plat">
                  <img src={require(`../assets/images/${el.img}`)} alt="img-plat" />  
                  <h3>{el.nom}</h3>
                  <p>{el.description}</p>
              </div>
            ))
        ) : (
          <h2>Aucun élément disponible dans cette catégorie.</h2>
        )}
      </div>

    </div>
  );
}

export default Categorie;
