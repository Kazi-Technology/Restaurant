import { useParams } from 'react-router-dom';

function Categorie(){

let { nomCategorie } = useParams(); // Récupère le paramètre de l'URL

const categories = {
    categorie1: ["Ordinateurs", "Smartphones", "Objets connectés"],
    categorie2: ["Astronomie", "Biologie", "Chimie"],
    categorie3: ["Football", "Basketball", "Tennis"],
    categorie4: ["Football", "Basketball", "Tennis"]
  };

  return (
    <div>
      <h4>Catégorie : {nomCategorie}</h4>
      <ul>
        {categories[nomCategorie]?.map((item, index) => (
          <li key={index}>{item}</li>
        )) || <p>Catégorie introuvable</p>}
      </ul>
    </div>
  );
}


export default Categorie;