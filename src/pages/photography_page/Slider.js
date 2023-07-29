import { Carousel } from "react-carousel-minimal";
import "./slider.css";
import { importAll } from "../../components/Utils/fileimporter";
import noah from "../../components/images/photography/IMG_1104.jpg";

function Slider() {
  const data = importAll(
    require.context(
      "../../components/images/photography",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  data.push({image: noah});

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="box">
      <Carousel
        data={data}
        width="850px"
        height="600px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={false}
        dots={true}
        slideBackgroundColor="#765f515d"
        slideImageFit="contain"
        thumbnails={true}
        thumbnailWidth="100px"
        // thumbnailHeight="100px"
      />
    </div>
  );
}

export default Slider;
