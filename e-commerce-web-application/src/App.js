import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login'
import {SignUp} from './components/SignUp'; 

function App() {
  return (
    <div className="">
      

      <Navbar/>

      <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/cart' element = {<Cart/>} /> 
          <Route path='/login' element ={<Login/>} />
          <Route path='/signup' element ={<SignUp/>} /> 
      </Routes>
      
    </div>
  );
}

export default App;
