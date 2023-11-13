import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';

import NavBar from './shared/Navbar';

function App() 
{
  return (
    <div className="App">
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
