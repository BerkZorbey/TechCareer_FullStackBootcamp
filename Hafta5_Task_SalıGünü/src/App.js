import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AddProduct from './pages/AddProduct';
function App() {
  return (<>
    <BrowserRouter>
      <Link to='/addProduct'>Add Product</Link>
      <Routes>
        <Route path='/addProduct' element={<AddProduct />}></Route> 
      </Routes>
    </BrowserRouter>
    
  </>
  );
}

export default App;
