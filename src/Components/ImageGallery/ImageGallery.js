import PropTypes from "prop-types";
import "../../App.css";
import { ImageGalleryItem } from "../ImageGalleryItem";
import { Component } from "react";
export class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem dataListCard={this.props.dataListCard} />
      </ul>
    );
  }
}

ImageGalleryItem.propTypes = {
  dataListCard: PropTypes.array.isRequired,
  // openModal: PropTypes.func.isRequired,
};
