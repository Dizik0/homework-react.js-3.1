import "../../App.css";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ dataListCard, openModal }) => {
  return dataListCard.map(({ webformatURL, largeImageURL, id, type }) => (
    <li
      id={id}
      key={id}
      onClick={openModal}
      data-bigpicture={largeImageURL}
      className="ImageGalleryItem"
    >
      <img src={webformatURL} alt={type} className="ImageGalleryItem-image" />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  dataListCard: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
