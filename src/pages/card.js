import React from "react";
import { ListGroup } from "react-bootstrap";


const Cards = props => {
  return (
    <ListGroup.Item>
      {props && props.title + " : " + props.calories + "cal"}
    </ListGroup.Item>
  );
};

export default Cards;
