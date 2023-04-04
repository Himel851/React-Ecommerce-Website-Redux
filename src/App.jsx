import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
