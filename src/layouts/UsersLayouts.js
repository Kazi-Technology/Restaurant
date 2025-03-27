import { Outlet } from "react-router-dom"
import { useCart } from "../context/CartContexte";

const UserLayout = () => {

    const { cart } = useCart();

  return (
    
        <div>
            
            <Outlet />

        </div>
    )

};

export default UserLayout;
