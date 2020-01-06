import React from 'react';
import { Navbar, Container, NavbarToggler, Collapse, Nav, NavItem, NavLink, Form, FormGroup, Input, Button } from 'reactstrap';


import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";

/*const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"> Calorie Manager </Navbar.Brand>
        </Navbar>
    );
}

export default Navigation;*/

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar expand="lg" color="dark">
                <Container>
                    <div className="navbar-translate">
                        <NavbarToggler onClick={this.toggle}>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                        </NavbarToggler>
                    </div>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem active>
                                <NavLink href="#home">
                                    Calorie Manager 
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#about">
                                    About
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Form inline className="ml-auto">
                            <FormGroup /*className="no-border"*/>
                                <Input style={{border: "white"}} type="text" placeholder="Search..." />
                            </FormGroup>
                            <Button /*color="primary" className="btn-icon btn-round"*/>
                                <i className="nc-icon nc-zoom-split"></i>
                            </Button>
                        </Form>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}


export default Navigation;