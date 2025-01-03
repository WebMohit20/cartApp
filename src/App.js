import React from 'react';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import "./components/style.css";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
