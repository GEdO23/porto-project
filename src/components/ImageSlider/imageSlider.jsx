import { useState } from "react";
import PropTypes from "prop-types";

export default function ImageSlider({ slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const styles = {
    containerSlider: {
      height: "100%",
      position: "relative",
    },
    slideStyle: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url(${slides[currentIndex].url})`,
    },
    containerInfo: {
      transform: 'translate(0, 100%)',
      width: '100%',
      height: 'fit-content'
    },
    styleDescricao: {
      width: "60%"
    },
    containerDots: {
      width: "40%",
      bottom: "10px",
      position: "absolute",
      display: "flex",
      justifyContent: "space-evenly",
    },
    dot: {
      width: "15px",
      height: "15px",
      backgroundImage: "url(/public/icons/dot-filled.png)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'none',
      cursor: "pointer",
    },
  };

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  const titulo = slides[currentIndex].titulo;
  const descricao = slides[currentIndex].descricao;

  return (
    <>
      <div style={styles.containerSlider}>
        <div style={styles.slideStyle}>
          <div style={styles.containerInfo}>
            <h1>{titulo}</h1>
            <p style={styles.styleDescricao}>{descricao}</p>
          </div>

          <div style={styles.containerDots}>
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                <div style={styles.dot} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

ImageSlider.propTypes = {
  slides: PropTypes.string.isRequired
};
