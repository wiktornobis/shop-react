import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RightNav from "./components/header/RightNav";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import BasketEmpty from "./components/pages/BasketEmpty";
import Footer from "./components/footer/Footer";
import MainPage from "./components/pages/MainPage";







function App() {
  return (
      <Router>
          <RightNav />
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/products' element={<Products />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/basket' element={<BasketEmpty />} />
          </Routes>
          <Footer />
      </Router>

  );
}

export default App;
