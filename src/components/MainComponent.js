import React, { Component } from "react";
// import Navbar from "./layout/navbar/Navbar";
import MenuComponent from "./MenuComponent";

import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/Comments";
import { LEADERS } from "../shared/Leaders";
import { PROMOTIONS } from "../shared/Promotions";
import DishDetailComponent from "./DishDetailComponent";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

class Main extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    // selectedDish: null,
  };
  // handleClick = (dishId) => {
  //   this.setState({
  //     selectedDish: dishId,
  //   });
  // };
  componentDidMount() {
    console.log("Maincomponent componentDidMount");
  }
  componentDidUpdate() {
    console.log("main component componentDidUpdate");
  }

  

  render() {
    const HomePage=()=>{
      return (
        <Home 
        dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
        
        />
      )
    }
    console.log("main component render");

    const dishWithId=({match})=>{
      console.log(match)
      return(
        <DishDetailComponent dish={this.state.dishes.filter((item)=>item.id===parseInt(match.params.dishId,10))[0]}
          comment={this.state.comments.filter((item)=>item.dishId===parseInt(match.params.dishId,10))}
        />
      )
    }
    // console.log(this.state.selectedDish)
    return (
      <div>
        {/* <Navbar /> */}
        <Header />
        {/* <MenuComponent
          dishes={this.state.dishes}
          handleClick={(dishId) => this.handleClick(dishId)}
        />
        <div className="container">
        <DishDetailComponent
          dish={(this.state.selectedDish?{dish:this.state.dishes.filter(
            (item) => item.id === this.state.selectedDish
          )[0]}:{dish:null})}
        />
        </div> */}
        <Switch>
          <Route path="/home"  component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <MenuComponent dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={dishWithId}/>
          <Route path="/contactus" component={Contact} />
          <Route path="/about" component={()=><About leaders={this.state.leaders}/>} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
