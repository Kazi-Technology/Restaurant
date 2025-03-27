import AppRoutes from "./routes";
import { CartProvider } from "./context/CartContexte";
import './App.css'

const App = () => {
  return (

    <CartProvider>
      <AppRoutes />
    </CartProvider>

  )
};

export default App;

