import styles from "../../styles/styles.module.scss";
import propTypes from "prop-types";

export default function Button({ onClick }) {
  return (
    <button type="button" className={styles.Button} onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
