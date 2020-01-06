import React from "react";
import { Card, Accordion } from "react-bootstrap";
import Checkbox from "./checkbox";

class Cards extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };

  this.calculateTotal = this.calculateTotal.bind(this);
    }
    
  calculateTotal(input, checked) {
    let { total } = this.state;

  if (checked) {
    total += input;
  } else {
    total -= input;
  }

  this.setState({
    total
  });
}

  render(){
    return (
    <div> 
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={`${this.props.key}`}>
        <Checkbox calculateTotal={this.calculateTotal} value={this.props.calories} /> {" "}
          {this.props && this.props.title + " : " + this.props.calories + "cal"}
        </Accordion.Toggle>

        <Accordion.Collapse eventKey={`${this.props.key}`}>
          <Card.Body>
            {" "}
            {this.props.obj.nutrients &&
              "fat: " + this.props.obj.nutrients["fat"]} ||{" "}
            {this.props.obj.nutrients &&
              "trans fats: " + this.props.obj.nutrients["transfat"]}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
        <h1>Total Calories: </h1> { this.props.total }  
    </div>
      
    
    );
  }
}

export default Cards;
