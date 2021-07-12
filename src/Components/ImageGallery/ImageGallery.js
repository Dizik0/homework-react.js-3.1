import PropTypes from "prop-types";
import "../../App.css";
import { ImageGalleryItem } from "../ImageGalleryItem";
import { Component } from "react";
export class ImageGallery extends Component {
  render() {
    const { dataListCard, openModal } = this.props;
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem dataListCard={dataListCard} openModal={openModal} />
      </ul>
    );
  }
}

ImageGalleryItem.propTypes = {
  dataListCard: PropTypes.array.isRequired,
};
