import propTypes from "prop-types";
import styles from "../../styles/styles.module.scss";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: propTypes.array.isRequired,
  onImageClick: propTypes.func.isRequired,
};
