
import './App.css';
import Nav from './component/nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './component/footer';
import Signup from './component/Signup';
import Private from './component/private';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import Products from './component/Products';
import Update from './component/Update';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Routes>
      <Route element={<Private />}>
          <Route path='/' element={<Products />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/logout' element={<h1>logout</h1>} />
          <Route path='/profile' element={<h1>profile</h1>} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
