import './style/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product_Listing from './Product-Listing';
import Contextprovider from "./context/contextprovider"
import Product_Details from './Product-Detail';
import CartcontextProvider from './context/CartcontextProvider';
import Cart from './Cart';
import Buy from './Buy';
function App() {

  return (
    <>
      <CartcontextProvider>
    <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Product_Listing/>} />
            <Route path="/Product-Details" element={<Product_Details/>} />
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/Buy" element={<Buy />} />
          </Routes>
        </BrowserRouter>
    </Contextprovider>
      </CartcontextProvider>
    </>
  )
}

export default App
