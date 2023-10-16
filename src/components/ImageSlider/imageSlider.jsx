import { useState } from "react";

export default function ImageSlider({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  };

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
  <>
  <div style={sliderStyles}>
    <div style={slideStyles} />
  </div>
  
  </>
  );
}
