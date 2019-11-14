import React from "react";
import Cards from "./card";
import {
  Card,
  ListGroup,
  Container,
  ToggleButton,
  ButtonGroup
} from "react-bootstrap";

const meals = require("../common/meals")

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      meals: []
    };
  }

  handleClick = (index, name) => {
    this.setState({
      meals: meals[index][name].slice()
    });
  };

  render() {
    return (
      <Container>
        <div className="d-flex flex-column">
          <ButtonGroup toggle className="mt-3">
            <ToggleButton
              variant="light"
              onClick={() => this.handleClick(0, "break-fast")}
              type="radio"
              name="radio"
              defaultChecked
              value="1"
            >
              Break-Fast
            </ToggleButton>
            <ToggleButton
              variant="light"
              onClick={() => this.handleClick(1, "lunch")}
              type="radio"
              name="radio"
              value="2"
            >
              Lunch
            </ToggleButton>
            <ToggleButton
              variant="light"
              onClick={() => this.handleClick(2, "dinner")}
              type="radio"
              name="radio"
              value="3"
            >
              Dinner
            </ToggleButton>
          </ButtonGroup>
        </div>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Meals</Card.Title>
            <Card.Text>Here are a list of meals</Card.Text>
          </Card.Body>
          <ListGroup>
            {this.state.meals.map((item, i) => (
              <Cards key={i} title={item.name} calories={item.calories}/>
            ))}
          </ListGroup>
        </Card>
      </Container>
    );
  }
}

export default List;
