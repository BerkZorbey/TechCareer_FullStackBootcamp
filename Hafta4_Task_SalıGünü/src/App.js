import logo from './logo.svg';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import AddProduct from './pages/AddProduct';
function App() {
  return (
    <>
    <BrowserRouter>
    <h1>Home Page</h1>
    <Link to="/products" style={{marginRight:20}}>ProductList</Link>
    <Link to="/addProduct">AddProduct</Link>
      <Routes>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
