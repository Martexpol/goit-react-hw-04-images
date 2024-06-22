import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";
import axios from "axios";
import "../styles/styles.module.scss";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (searchTerm) {
      fetchImages(searchTerm, page);
    }
  }, [searchTerm, page]);

  const fetchImages = async (searchTerm, page, totalHits) => {
    const url = `https://pixabay.com/api/?key=43633313-2d57b2d2b488e671d86985190&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;
    setLoading(true);
    try {
      const response = await axios.get(url);

      const newImages = response.data.hits.map((item) => ({
        id: item.id,
        webformatURL: item.webformatURL,
        largeImageURL: item.largeImageURL,
      }));

      if (newImages.length === 0) {
        toast("Nie znaleziono żadnych wyników.");
      }

      setImages((prevImages) =>
        page === 1 ? newImages : [...prevImages, ...newImages],
      );
      setTotalHits(response.data.totalHits);
    } catch (error) {
      console.error("Wystąpił błąd podczas wyszukiwania:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (searchTerm) => {
    setPage(1);
    setSearchTerm(searchTerm);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const displayModal = (largeImageURL) => {
    setImage(largeImageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setImage(null);
    setShowModal(false);
  };

  const numberOfHits = images.length;

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ToastContainer />

      <ImageGallery
        images={images}
        page={page}
        onImageClick={displayModal}></ImageGallery>
      <div className={StyleSheet.mainContainer}>
        {loading && <Loader />}

        {numberOfHits > 0 && numberOfHits < totalHits && !loading && (
          <Button onClick={loadMore} />
        )}
      </div>
      {showModal && image && <Modal imageUrl={image} onClose={closeModal} />}
    </>
  );
}
