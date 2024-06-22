import styles from "../../styles/styles.module.scss";
import propTypes from "prop-types";
import { useEffect } from "react";

export default function Modal({ imageUrl, onClose }) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.Overlay} onClick={handleClickOutside}>
      <div className={styles.Modal}>
        <img src={imageUrl} alt="LargeImg" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  imageUrl: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
};
