import "./App.css";
import { Searchbar } from "./Components/Searchbar";
import { Component } from "react";
import { ImageGallery } from "./Components/ImageGallery";
import { Button } from "./Components/Button";
import { Modal } from "./Components/Modal";
import { Loader } from "./Components/Loader";
import axios from "axios";

export default class App extends Component {
  state = {
    searchQuery: "",
    todo: [],
    page: 1,
    loading: false,
  };

  API_KEY = "21345832-5dab6ae111cd5d8e046b71308";

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getApiData();
    }
  }

  getApiData = () => {
    this.setState({ loading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(({ data: { hits } }) =>
        this.setState((prevState) => ({
          todo: [...prevState.todo, ...hits],
          page: prevState.page + 1,
        }))
      )
      .finally(() => this.setState({ loading: false }));
  };
  getSearchQuery = (e) => {
    this.setState({
      searchQuery: e,
      page: 1,
      todo: [],
    });
  };

  resetAllData = () => {
    this.setState({ searchQuery: "", page: 1 });
  };

  render() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    const { todo, loading } = this.state;
    return (
      <div>
        <Searchbar getSearchQuery={this.getSearchQuery} />
        <ImageGallery dataListCard={todo} />
        {todo.length > 0 && (
          <Button
            getApiData={this.getApiData}
            resetAllData={this.resetAllData}
          />
        )}
        {loading && <Loader />}
        <Modal imgListCard={todo} />
      </div>
    );
  }
}
