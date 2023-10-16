import ImageSlider from "../../components/ImageSlider/imageSlider";

export default function Home() {
  const slides = [
    { url: "/public/imgs/img-bike.jpg", title: "Contrato de Bike" },
    { url: "/public/imgs/img-game.jpg", title: "Gamificacao" },
    { url: "/public/imgs/img-corp.jpg", title: "Equipe" },
  ];

  const containerStyles = {
    width: '800px',
    height: '500px',
    margin: '0 auto',
  };

  return (
    <div style={containerStyles}>
      <ImageSlider slides={slides} titulo={'e'} descricao={'e'} />
    </div>
  );
}
