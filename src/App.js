import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
// import NavBar from "./components/Navigation/NavBar.js"
import Navbar from "./components/Navigation/Navbar-t.js";
import BackgroundSlide from "./components/Utils/BackgroundSlide";
import WelcomePage from "./pages/welcome_page/WelcomePage";
import PhotographyPage from "./pages/photography_page/PhotographyPage";
import ArtPage from "./pages/art_page/ArtPage";
import MusicPage from "./pages/music_page/MusicPage";
import PursuitsPage from "./pages/pursuits_page/PursuitsPage";
import Headers from "./components/Utils/Headers";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import banImg1 from "./components/images/tree.png";
// import background from "./components/images/Screen Shot 2023-07-12 at 9.35.15 PM.png";
import background2 from "./components/images/Screen Shot 2023-07-12 at 10.03.30 PM.png";
import background3 from "./components/images/Screen Shot 2023-07-12 at 9.55.19 PM.png";
import background from "./components/images/Screen Shot 2023-07-13 at 12.57.52 PM.png";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  const location = useLocation();
  const [x, setX] = useState(0);

  const sliderArr = [
    background,
    background,
    background,
    background,
    background,
  ];
  const [bannersLoaded, setBannersLoaded] = useState(0);

  var titleStyle = {
    fontSize: "5rem",
  };
  var personalStyle = {
    fontSize: "2rem",
    // width: 160.014,
  };
  const headerArry = [
    <>
      <div className="centerBox">
        <h1 className="banner_title" style={titleStyle}>
          hey this is Erin.
        </h1>
      </div>
      <div className="lowerBox">
        <h1 className="banner_title" style={personalStyle}>
          Let's get personal...
        </h1>
      </div>
    </>,
    <div className="centerBox">
      <h1 className="banner_title" style={titleStyle}>
        enjoy some doodles.
      </h1>
    </div>,
    <div className="centerBox">
      <h1 className="banner_title" style={titleStyle}>
        life in pictures.
      </h1>
    </div>,
    <div className="centerBox">
      <h1 className="banner_title" style={titleStyle}>
        grab your headphones.
      </h1>
    </div>,
    <div className="centerBox">
      <h1 className="banner_title" style={titleStyle}>
        where I'm heading.
      </h1>
    </div>,
  ];

  useEffect(() => {
    // window.addEventListener("resize", handleResize);

    if (
      (location["pathname"] === "/" || location["pathname"] === "/home") &
      (x !== 0)
    ) {
      setX(0);
    }
    if ((location["pathname"] === "/art") & (x !== -100)) {
      setX(-100);
    }
    if ((location["pathname"] === "/photography") & (x !== -200)) {
      setX(-200);
    }
    if ((location["pathname"] === "/music") & (x !== -300)) {
      setX(-300);
    }
    if ((location["pathname"] === "/pursuits") & (x !== -400)) {
      setX(-400);
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <div
          className="loadingApp"
          style={bannersLoaded === sliderArr.length ? { display: "none" } : {}}
        >
          {location["pathname"] === "/" || location["pathname"] === "/home" ? (
            <div className="bannerContainer">
              <div className="centerBox">
                <div className="centerText" style={{ width: "650px" }}>
                  <Skeleton variant="text" style={titleStyle} />
                </div>
              </div>
              <div className="lowerBox">
                <div className="lowerText">
                  <Skeleton variant="text" style={personalStyle} />
                </div>
              </div>
            </div>
          ) : (
            <div />
          )}

          {location["pathname"] === "/art" ? (
            <div className="bannerContainer">
              <div className="centerBox">
                <div className="centerText" style={{ width: "850px" }}>
                  <Skeleton variant="text" style={titleStyle} />
                </div>
              </div>
            </div>
          ) : (
            <div />
          )}

          {location["pathname"] === "/photography" ? (
            <div className="bannerContainer">
              <div className="centerBox">
                <div className="centerText"  style={{ width: "650px" }}>
                  <Skeleton variant="text" style={titleStyle} />
                </div>
              </div>{" "}
            </div>
          ) : (
            <div />
          )}

          {location["pathname"] === "/music" ? (
            <div className="bannerContainer">
              <div className="centerBox">
                <div className="centerText" style={{ width: "950px" }}>
                  <Skeleton variant="text" style={titleStyle} />
                </div>
              </div>{" "}
            </div>
          ) : (
            <div />
          )}

          {location["pathname"] === "/pursuits" ? (
            <div className="bannerContainer">
              <div className="centerBox">
                <div className="centerText" style={{ width: "800px" }}>
                  <Skeleton variant="text" style={titleStyle} />
                </div>
              </div>{" "}
            </div>
          ) : (
            <div />
          )}
        </div>

        <div
          className="loadedApp"
          style={bannersLoaded === sliderArr.length ? {} : { display: "none" }}
        >
          <div className="bannerContainer">
            <BackgroundSlide
              sliderArr={sliderArr}
              x={x}
              bannersLoaded={bannersLoaded}
              setBannersLoaded={setBannersLoaded}
            />
            <Headers headerArry={headerArry} x={x} />

            {/* <div className="centerBox">
              <h1 className="banner_title" style={titleStyle}>
                Hey this is Erin.
              </h1>
            </div>
            <div className="lowerBox">
              <h1 className="banner_title" style={personalStyle}>
                Let's get personal...
              </h1>
            </div> */}
          </div>
          <div className="navbar">
            <Navbar x={x} setX={setX} />
          </div>

          <div className="content">
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/home" element={<WelcomePage />} />
              <Route path="/art" element={<ArtPage />} />
              <Route path="/photography" element={<PhotographyPage />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/pursuits" element={<PursuitsPage />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
