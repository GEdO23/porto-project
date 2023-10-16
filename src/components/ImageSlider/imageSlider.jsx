import { useState } from "react";
import PropTypes from "prop-types";
import style from './ImageSlider.module.scss';

export default function ImageSlider({slides, titulo, descricao}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  return (
    <>
      <div className={style.sliderContainer}>
        <div className={style.arrowLeft} onClick={goToPrevious}>
          ⇦
        </div>
        <div className={style.arrowRight} onClick={goToNext}>
          ⇨
        </div>
        <div style={slideStyle}>
          <div>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
          </div>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={{
                margin: "0 3px",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

ImageSlider.propTypes = {
  slides: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};
