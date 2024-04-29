import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './components/NavBar';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import FloraFauna from './components/FloraFauna';
import Abiotic from './components/Abiotic';
import Habitat from './components/Habitat';
import Decomposers from './components/Decomposers';
import About from './components/About';


const App = () => {
  return (
    <div className='overflow-hidden bg-black'>
      <CollapsibleExample/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/FloraFauna" element={<FloraFauna/>}/>
          <Route path="/abiotic" element={<Abiotic/>}/>
          <Route path="/habitat" element={<Habitat/>}/>
          <Route path="/decomposers" element={<Decomposers/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
      
    </div>
  )
}

export default App
