import './App.css';
import Preloader from './composants/Preloader'
import Home from './composants/Home'
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Cache le preloader après 3 secondes
    }, 3000);
  }, []);

  return (
    <div>

      {loading ? <Preloader /> : <Home/> }
     
    </div>
  );
}

export default App;
