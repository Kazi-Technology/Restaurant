import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      
        <Outlet /> {/* Permet d'afficher les pages enfants */}

    </div>
  );
};

export default UserLayout;
