import PropTypes from "prop-types";
import "../../App.css";
import { Component } from "react";
export class Button extends Component {
  render() {
    return (
      <button type="Submit" className="Button" onClick={this.props.getApiData}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  getApiData: PropTypes.func.isRequired,
};
