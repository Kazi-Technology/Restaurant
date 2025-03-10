import { useParams } from "react-router-dom";
import data from "../data/categories.json";
import { useRef, useState } from "react";

function Categorie() {
  const { nomCategorie } = useParams();
  const categorie = data.categories.find((cat) => cat.nomcat === nomCategorie);
  const elements = data.elements.filter((el) => el.categorie === nomCategorie);

  // Slider
  const sliderRef = useRef(null);
  const [IsDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const startXRef = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX - offsetX;
  };

  const handleMouseMove = (e) => {
    if (!IsDragging) return;
    const newX = e.clientX - startXRef.current;
    setOffsetX(newX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!categorie) {
    return <h2 className="p-2 bg-white rounded container">Cliquez sur une catégorie pour voir les plats !</h2>;
  }

  return (
    <div ref={sliderRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} className="p-3 slider mb-4 bg-white rounded overflow-hidden">

      <h5 className="mb-3">{categorie.nomcat}</h5>
      <div  className="plats slides-container gap-3 rounded d-flex" style={{ transform: `translateX(${offsetX}px)` }}>
        {elements.length > 0 ? (
            elements.map((el) => (
              <div key={el.id} className="plat slide">
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
