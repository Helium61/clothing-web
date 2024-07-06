import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import MenCategories from './pages/MenCategories';
import WomenCategories from './pages/WomenCategories';
import TshirtsCategories from './pages/TshirtsCategories';
import ItemDetail from './pages/ItemDetail';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/men-categories" element={<MenCategories />} />
            <Route path="/women-categories" element={<WomenCategories />} />
            <Route path="/tshirts-categories" element={<TshirtsCategories />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
