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
/*class DishDetailComponent extends Component {
  // displayComments = (comments) => {
  //   const commentsArray = comments.map((comment) => {
  //     return (
  //       <div key={comment.id}>
  //         <ul className="list-unstyled">
  //           <li>{comment.comment}</li>
  //           <li>
  //             --{comment.author}, {comment.date}
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   });
  //   return commentsArray;
  // };
  // componentDidMount(){
  //   console.log('dish detail component componentDidMount');
  // }
  // componentDidUpdate(){
  //   console.log('dish detail component componentDidUpdate');
  // }
  render() {
    console.log('dish detail component render');

    const { dish } = this.props.dish;
    console.log(dish);
    if (dish !== null) {
      console.log(this.props);
      const commentsArray = dish.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <ul className="list-unstyled">
              <li>{comment.comment}</li>
              <li>
                --{comment.author}, { new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
              </li>
            </ul>
          </div>
        );
      });
      return (
        <div className="row ">
          <div className="col-12 col-md-5 m-1  ">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
            
          </div>
          <div className="col-12 col-md-5 m-1">
            <h3>Comments</h3> */
            {/* {this.displayComments(dish.comments)} */}
         /*   
         {commentsArray}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
*/


 function RenderComment({comment}) {
    const commentArr=comment.map((comment) => {
      return (
        <div key={comment.id}>
          <ul className="list-unstyled">
            <li>{comment.comment}</li>
            <li>
              --{comment.author}, { new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
            </li>
          </ul>
        </div>
      );
    });
return commentArr
}


function SelectedDish({dish}) {
  return (
    <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
  )
}




function DishDetailComponent(props) {

  const { dish } = props.dish;
  console.log(dish);
  console.log('dishDetail Props',props);
  if (dish !== null) {
    console.log('dish comment',dish.comments);
    return (
      <div className="row ">
        <div className="col-12 col-md-5 m-1  ">
          <SelectedDish dish={dish}/>
          
        </div>
        <div className="col-12 col-md-5 m-1">
          <h3>Comments</h3>
          <RenderComment comment={dish.comments}/>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}






/*function DishDetailComponent(props) {

  const { dish } = props.dish;
  console.log(dish);
  console.log('dishDetail Props',props);
  if (dish !== null) {
    const commentsArray = dish.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <ul className="list-unstyled">
            <li>{comment.comment}</li>
            <li>
              --{comment.author}, { new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
            </li>
          </ul>
        </div>
      );
    });
    return (
      <div className="row ">
        <div className="col-12 col-md-5 m-1  ">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
          
        </div>
        <div className="col-12 col-md-5 m-1">
          <h3>Comments</h3>
          
          {commentsArray}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
} */
export default DishDetailComponent;
