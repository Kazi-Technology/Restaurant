import { useParams } from "react-router-dom";
import data from "../data/categories.json";

function Categorie() {
  const { nomCategorie } = useParams();
  const categorie = data.categories.find((cat) => cat.nomcat === nomCategorie);
  const elements = data.elements.filter((el) => el.categorie === nomCategorie);

  if (!categorie) {
    return <h2 className="p-1">Catégorie introuvable !</h2>;
  }

  return (
    <div className="p-3 mb-4 bg-white rounded overflow-hidden">

      <h5 className="mb-3">{categorie.nomcat}</h5>
      <div className="plats gap-3 rounded d-flex">
        {elements.length > 0 ? (
            elements.map((el) => (
              <div key={el.id} className="plat">
                  <img className="rounded" src={require(`../assets/images/${el.img}`)} alt="img-plat" />  
                  <h5 className="p-1">{el.prix}</h5>
                  <p className="p-1">{el.description}</p>

                  <button className="btn btn-danger w-100 p-2 fw-bold"><i className="bi bi-plus-lg"></i> Ajouter</button>
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
