import "./artPage.css";
import WSPGallery from "./WSPGallery";
import { useInView } from 'react-intersection-observer';

import sia from "../../components/images/art/sia.jpg";
import timothy from "../../components/images/art/timothy.jpg";
import charcoal from "../../components/images/art/charcoal.jpg";
import meltingface from "../../components/images/art/meltingface.jpg";
import ArtBackground from "./ArtBackground";

const ArtPage = () => {
  const images = [
    {
      img: sia,
      caption:
        "Drew this in the airport with my new sketchbook. I really like the way the hair turned out.",
      width: "423px",
    },
    {
      img: timothy,
      caption:
        "It wasn't until after I drew this that I realized he looks like Timothy Chalamet.",
      width: "412px",
    },
    {
      img: charcoal,
      caption:
        "This is the first drawing I did with charcoal. I like the way the charcoal adds more dimension to the shadows.",
      width: "445px",
    },
    { img: meltingface, caption: "Melting face.", width: "446px" },
  ];


  return (
    <div className="artContainer">
      <div className="center">
        {/* <div
          className="banner_title"
          style={{
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: 'bold'
          }}
        >
          "Imagination is more important than knowledge" -Albert Einstein
        </div> */}
        <div className="artBackground" style={{ display: "flex", justifyContent: "center", paddingBottom: "3rem" }}>
          <ArtBackground/>
        </div>
        <WSPGallery galleryImages={images} />
      </div>
    </div>
  );
};

export default ArtPage;
