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

function RenderMenuItems({ item, handleClick }) {
  return (
    <Card onClick={() => handleClick(item.id)}>
      <CardImg width="100%" src={item.image} alt={item.name} />
      <CardImgOverlay>
        <CardTitle>{item.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function MenuComponent(props) {
  console.log("props:", props);
  const menu = props.dishes.map((item) => {
    return (
      <div key={item.id} className="col-12 col-md-5 m-1">
        <RenderMenuItems item={item} handleClick={props.handleClick} />
      </div>
    );
  });
  return (
    <div>
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    </div>
  );
}

/*class MenuComponent extends Component {
  render() {
    const { dishes } = this.props;
    const menu = dishes.map((item) => {
      return (
        <div key={item.id} className="col-12 col-md-5 m-1">
          <Card onClick={()=>this.props.handleClick(item.id)}>
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
          <div className="row">{menu}</div> */
{
  /* <DishDetailComponent dish={this.state.selectedItem} /> */
}
/*    </div>
      </div>
    );
  }
} */

export default MenuComponent;
