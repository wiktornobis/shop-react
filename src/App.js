import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RightNav from "./components/header/RightNav";
import Products from "./components/pages/Products";
import AboutUs from "./components/pages/AboutUs";
import Cart from "./components/pages/Cart";
import Footer from "./components/footer/Footer";
import MainPage from "./components/pages/MainPage";
import Form from "./components/form/Form";
import data from "./components/data/DataProducts";
import {useState} from "react";
import Contact from "./components/pages/Contact";



function App() {
    const { products } = data
    const [cartItems, setCartItems] = useState([]);

    const handleAddProduct = (product) => {

        const exist = cartItems.find((item) => item.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id 
                              ? { ...exist, qty: exist.qty + 1 } 
                              : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    }

    const handleRemoveProduct = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist.qty === 1){
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) => item.id === product.id 
                                                  ? {...exist, qty: exist.qty - 1} 
                                                  : item)
            )
        }
    }
    
    const handleCartClearance = () => {
        setCartItems([]);
    }

    const handleRemoveSingleProduct = ((product) => {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
    })

  return (
      <Router>
          <RightNav  cartItems={cartItems} />
          <Routes>
              <Route path='/' element={<MainPage />} exact/>
              <Route path='/products' element={<Products products={products} cartItems = {cartItems} handleAddProduct = {handleAddProduct} />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/basket' element={<Cart cartItems={cartItems}
                                                    handleAddProduct = {handleAddProduct}
                                                    handleRemoveProduct={handleRemoveProduct}
                                                    handleCartClearance={handleCartClearance}
                                                    handleRemoveSingleProduct={handleRemoveSingleProduct} />} />
              <Route path='/basket/address' element={<Form />} />
          </Routes>
          <Footer />
      </Router>

  );
}

export default App;
