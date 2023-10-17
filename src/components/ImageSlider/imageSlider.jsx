import { useState } from "react";
import styles from './ImageSlider.module.scss';
import PropTypes from "prop-types";

export default function ImageSlider({ slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  const slideStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  }

  const titulo = slides[currentIndex].titulo;
  const descricao = slides[currentIndex].descricao;

  return (
    <>
      <div className={styles.containerSlider}>
        <div style={slideStyle} className={styles.slideStyle}>
          <div className={styles.containerInfo}>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
          </div>

          <div className={styles.containerDots}>
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className={styles.dot}  onClick={() => goToSlide(slideIndex)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

ImageSlider.propTypes = {
  slides: PropTypes.array.isRequired
};
