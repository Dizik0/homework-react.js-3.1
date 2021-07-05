import "../../App.css";

export const ImageGalleryItem = ({ dataListCard }) => {
  return dataListCard.map(({ webformatURL, id, type }) => (
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} alt={type} className="ImageGalleryItem-image" />
    </li>
  ));
};
