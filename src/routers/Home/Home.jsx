import ImageSlider from "../../components/ImageSlider/imageSlider";
import db from '../../../db.json';

export default function Home() {
  const containerStyles = {
    width: '1300px',
    height: '650px',
    margin: '0 auto'
  };

  return (
    <div style={containerStyles}>
      <ImageSlider slides={db.slides}/>
    </div>
  );
}
