import './App.css';
import Preloader from './composants/Preloader'
import Categorie from './composants/Categorie'
import Home from './composants/Home'
import { useEffect, useState } from 'react'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>

      {loading ? <Preloader /> : (
        <Home>
          <Categorie /> 
        </Home>
      )}
     
    </div>
  );
}

export default App;
