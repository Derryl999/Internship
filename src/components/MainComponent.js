import React, { Component } from "react";
// import Navbar from "./layout/navbar/Navbar";
import MenuComponent from "./MenuComponent";

import { DISHES } from "../shared/dishes";
import DishDetailComponent from "./DishDetailComponent";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

class Main extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
  };
  handleClick = (dishId) => {
    this.setState({
      selectedDish: dishId,
    });
  };
  componentDidMount(){
    console.log('Maincomponent componentDidMount');
  }
  componentDidUpdate(){
    console.log('main component componentDidUpdate');
  }
  
  render() {
    console.log('main component render');
    // console.log(this.state.selectedDish)
    return (
      <div>
        {/* <Navbar /> */}
        <Header/>
        <MenuComponent
          dishes={this.state.dishes}
          handleClick={(dishId) => this.handleClick(dishId)}
        />
        <div className="container">
        <DishDetailComponent
          dish={(this.state.selectedDish?{dish:this.state.dishes.filter(
            (item) => item.id === this.state.selectedDish
          )[0]}:{dish:null})}
        />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main;
