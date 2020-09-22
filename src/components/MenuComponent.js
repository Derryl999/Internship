import React, { Component } from "react";
import {
  Media,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";
export class MenuComponent extends Component {
  state={
    selectedItem:null
  }
  handleClick=(dish)=>{
    this.setState({
      selectedItem:dish
    })
  }
  renderItem=(dish)=>{
    if(dish){
      return(
        <Card>
            <CardImg  width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )
    }else{
      return <div></div>
    }
  }
  render() {
    const { dishes } = this.props;
    const menu = dishes.map((item) => {
      return (
        <div key={item.id} className="col-12 col-md-5 m-1">
          <Card onClick={()=>this.handleClick(item)}>
            <CardImg  width="100%" src={item.image} alt={item.name} />
            <CardImgOverlay>
              <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <div className="container">
          <div className="row">{menu}</div>
        <div className="row">
          {this.renderItem(this.state.selectedItem)}
        </div>
        </div>
      </div>
    );
  }
}

export default MenuComponent;
