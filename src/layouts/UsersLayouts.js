import { Outlet } from "react-router-dom"
import Preloader from "../composants/Preloader";
import { useState, useEffect } from "react";


const UserLayout = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() =>{

        setTimeout(() => {
            setLoading(false)
        }, 3000);

    }, [])

  return (
    
        <div>
            {loading ? <Preloader/> : (
                <div>
                    <Outlet />
                </div>
            )}
        </div>
    )

};

export default UserLayout;
