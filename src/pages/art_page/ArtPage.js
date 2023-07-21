import "./artPage.css";
import WSPGallery from "./WSPGallery";
import { useInView } from "react-intersection-observer";

import sia from "../../components/images/art/sia.jpg";
import timothy from "../../components/images/art/timothy.jpg";
import charcoal from "../../components/images/art/charcoal.jpg";
import meltingface from "../../components/images/art/meltingface.jpg";
// import sun from "../../components/images/art/sun.jpg";
import sun_b from "../../components/images/art/sun_b&w.jpg";
import animals from "../../components/images/art/animals.png";

import ArtBackground from "./ArtBackground";
import Footer from "../../components/footer_section/Footer";

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
    // {
    //   img: sun,
    //   caption:
    //     "I really love the style of this one. The shading was done with many thin lines which gives it an interesting look. ",
    //   width: "472px",
    // },
    {
      img: sun_b,
      caption: "I really love the style of this one.",
      width: "472px",
    },
    {
      img: animals,
      caption:
        "The background I made for this website! I saw someone with a really cool tattoo of walking animals and it inspired me to make this art.",
      width: "980px",
    },
  ];

  return (
    <>
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
          <div
            className="artBackground"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ArtBackground />
          </div>
          <WSPGallery galleryImages={images} />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Footer color="rgb(127, 123, 123)" />
        </div>
      </div>
    </>
  );
};

export default ArtPage;
