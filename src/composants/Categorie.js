import { useParams } from "react-router-dom";
import data from "../data/categories.json";
import { useRef, useState } from "react";

//Composants


function Categorie() {
  const { nomCategorie } = useParams();
  const categorie = data.categories.find((cat) => cat.nomcat === nomCategorie);
  const elements = data.elements.filter((el) => el.categorie === nomCategorie);

  // Slider
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const startXRef = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX - offsetX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - startXRef.current;

    // Récupérer la largeur du slider et de son conteneur
    const slider = sliderRef.current;
    if (!slider) return;

    // const maxOffset = -(slider.scrollWidth - slider.clientWidth);

    // Empêcher le débordement
    if (newX > 0) {
      setOffsetX(0);
    } else {
      setOffsetX(newX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 🛠 Gestion du tactile (ajouté pour mobile)
  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      setIsDragging(true);
      startXRef.current = e.touches[0].clientX - offsetX;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length === 0) return;

    const newX = e.touches[0].clientX - startXRef.current;

    const slider = sliderRef.current;
    if (!slider) return;

    // const maxOffset = -(slider.scrollWidth - slider.clientWidth);

    if (newX > 0) {
      setOffsetX(0);
    } else {
      setOffsetX(newX);
    }
  };


  if (!categorie) {
    return <h3 className="p-2 bg-white rounded container">Cliquez sur une catégorie pour voir les plats !</h3>;
  }

  return (

      <div className="p-2 mb-4 bg-white rounded">

        <h5 className="mb-3">{categorie.nomcat}</h5>

        <div ref={sliderRef} onTouchMove={handleTouchMove} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onTouchStart={handleTouchStart} className="slider overflow-hidden">
          <div className="plats gap-3 rounded d-flex" style={{ transform: `translateX(${offsetX}px)`}}>
            {elements.length > 0 ? (
                elements.map((el) => (
                    <div key={el.id} className="plat rounded slide">
                        <img className="rounded w-100" src={require(`../assets/images/${el.img}`)} alt="img-plat" />  
                        <h4 className="p-1">{`CDF ${el.prix}`}</h4>
                        <p className="p-1 w-100">{el.details}</p>

                        <div className="d-flex w-100 overflow-hidden p-1 align-items-center justify-content-between">
                            <h6>{el.description}</h6>
                            <button className="btn btn-danger p-2"><i className="bi bi-plus-lg"></i>Ajouter</button>
                        </div>
                    </div>
                ))
            ) : (
                <h2>Aucun élément disponible dans cette catégorie.</h2>
            )}
          </div>

        </div>
      </div>

  );
}

export default Categorie;
