import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
// import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
{
  /*class NavbarComponent extends Component {
  state = {
    clicked: false,
    isNavOpen: false,
  };
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink className={item.cName} to={item.url}>
                        <span className={item.logo}></span>
                        {item.title}
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    );
  }
}

export default NavbarComponent; */
}
class NavbarComponent extends Component {
  state = {
    clicked: false,
    isNavOpen: false,
  };
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo1.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
                className="ml-1"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                {/* <NavItem >
                   <NavLink className="nav-link " to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink> 
                   </NavItem> */}

                {MenuItems.map((item, index) => {
                  return (
                    <NavItem>
                      <NavLink className="nav-link" to={item.url}>
                        <span className={item.logo}></span>
                        {item.title}
                      </NavLink>
                    </NavItem>
                  );
                })}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default NavbarComponent;
