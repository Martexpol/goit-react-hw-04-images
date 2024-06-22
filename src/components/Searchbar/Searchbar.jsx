import propTypes from "prop-types";
import styles from "../../styles/styles.module.scss";

export default function Searchbar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value;
    onSubmit(searchTerm);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchTerm"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
