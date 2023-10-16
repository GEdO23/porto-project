import ImageSlider from "../../components/ImageSlider/imageSlider";

export default function Home() {
  const slides = [
    { url: "", title: "" },
    { url: "", title: "" },
    { url: "", title: "" },
  ];

  return (
    <div>
      <ImageSlider slides={slides} />
    </div>
  );
}
