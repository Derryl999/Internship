import React from 'react';
// import {Navbar,NavbarBrand} from 'reactstrap'
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
   {/* <Navbar dark color="primary">
     <div className="container">
       <NavbarBrand href="/">Resort</NavbarBrand>
     </div>
   </Navbar> */}
    </div>
  );
}

export default App;
