import './App.css';
import Preloader from './composants/Preloader'
import Categorie from './composants/Categorie'
import Home from './composants/Home'
import Admin from './composants/Admin'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import NotFound from './composants/NotFound'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>

      <Router>

        <NavLink to="/admin/" />
        <NavLink to="/" />

        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/admin/" element={<Admin/>}/>
          <Route path="*" element={NotFound} />
        </Routes>

      </Router>

      {loading ? <Preloader /> : (
        <Home>
          <Categorie/>
        </Home>
      ) }
     
    </div>
  );
}

export default App;
