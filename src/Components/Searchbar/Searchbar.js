import "../../App.css";
import { Component } from "react";

export class Searchbar extends Component {
  state = {
    value: "",
  };

  getValueInput = (e) => {
    this.setState({ value: e.currentTarget.value });
  };
  SubmitForm = (e) => {
    e.preventDefault();
    this.props.getSearchQuery(this.state.value);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.SubmitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.getValueInput}
          />
        </form>
      </header>
    );
  }
}
