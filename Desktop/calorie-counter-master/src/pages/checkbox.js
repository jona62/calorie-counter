import React, { Component } from "react";

class CheckBox extends Component {
    state = {
        checked: false
    };
    render() {
        return (
                <input
                    type="checkbox"
                    value={this.state.checked}
                    onClick={() => {
                        this.setState(prevState => ({
                            checked: !prevState.checked
                        }));

                        this.props.calculateTotal(this.props.value, !this.state.checked);
                    }}
                />
            
        );
    }
}

export default CheckBox;
