import styles from "../../styles/styles.module.scss";
import propTypes from "prop-types";

export default function ImageGalleryItem({ image, onClick }) {
  if (!image) {
    return null;
  }
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onClick(image.largeImageURL)}>
      <img
        src={image.webformatURL}
        alt=""
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onClick: propTypes.func.isRequired,
};
