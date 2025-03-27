import React from 'react';
import { useState, useEffect } from "react";
import Accueil from '../../composants/Accueil';
import Preloader from '../../composants/Preloader';
const Home = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() =>{

        setTimeout(() => {
            setLoading(false)
        }, 3000);

    }, [])

    return (

        <div>

        { loading ? <Preloader /> : (

            <Accueil />

        )}
        </div>

    );
};

export default Home;