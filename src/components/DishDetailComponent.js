import React, { Component } from "react";
import {
  Media,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
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
{
  /* {this.displayComments(dish.comments)} */
}
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

function RenderComment({ comment }) {
  const commentArr = comment.map((comment) => {
    return (
      <div key={comment.id}>
        <ul className="list-unstyled">
          <li>{comment.comment}</li>
          <li>
            --{comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </li>
        </ul>
      </div>
    );
  });
  return commentArr;
}

function SelectedDish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function DishDetailComponent(props) {
  const { dish } = props;
  const { comment } = props;
  console.log("dishhh", dish);
  console.log("dishDetail Props", props);
  if (dish !== null) {
    console.log("dish comment", comment);
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr/>
          </div>
          <hr />
        </div>
        <div className="row ">
          <div className="col-12 col-md-5 m-1  ">
            <SelectedDish dish={dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <h3>Comments</h3>
            <RenderComment comment={comment} />
          </div>
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
