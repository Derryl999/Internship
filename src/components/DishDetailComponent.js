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
class DishDetailComponent extends Component {
  displayComments=(comments)=>{
    const commentsArray=comments.map((comment)=>{
      return(
        <div key={comment.id}>
          <ul className="list-unstyled">
      <li>{comment.comment}</li>
      <li>--{comment.author}, {comment.date}</li>
          </ul>
        </div>
      )
    })
    return commentsArray
  }
  render() {
      const {dish}=this.props
      if(dish!==null){
    return (
      <div className="row">
      <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg  width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h3>Comments</h3>
          {this.displayComments(dish.comments)}
        </div>
        </div>

    );
      }else{
        return(
          <div>
          </div>
          )
        }
  
}
}
export default DishDetailComponent;
