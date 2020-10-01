import React, { Component } from 'react';
// import {Navbar,NavbarBrand} from 'reactstrap'
import './App.css';
import MainComponent from './components/MainComponent';
// import MenuComponent from './components/MenuComponent';
// import Navbar from './components/navbar/Navbar';
// import { DISHES } from "./shared/dishes";
class App extends Component {
  // state={
  //   dishes:DISHES
  // }
  render(){
  return (
    <div className="App">
      {/* <Navbar/> */}
   {/* <Navbar dark color="primary">
     <div className="container">
       <NavbarBrand href="/">Resort</NavbarBrand>
     </div>
   </Navbar> */}
   {/* <MenuComponent dishes={this.state.dishes} /> */}
   <MainComponent/>
    </div>
  );
  }
}

export default App;
