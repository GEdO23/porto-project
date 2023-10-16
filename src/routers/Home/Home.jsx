import ImageSlider from "../../components/ImageSlider/imageSlider";
import db from '../../../db.json';

export default function Home() {
  const containerStyles = {
    width: '1000px',
    height: '600px',
    margin: '0 auto'
  };

  return (
    <div style={containerStyles}>
      <ImageSlider slides={db.slides}/>
    </div>
  );
}
