import React from "react";
import { Card, Accordion } from "react-bootstrap";

const Cards = props => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={`${props.key}`}>
        {props && props.title + " : " + props.calories + "cal"}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={`${props.key}`}>
        <Card.Body> { props.obj.nutrients && "fat: " + props.obj.nutrients["fat"]} </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default Cards;
