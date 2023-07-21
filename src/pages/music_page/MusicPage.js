import { Skeleton } from "@mui/material";
import "./music.css";
import { useState } from "react";

import Footer from "../../components/footer_section/Footer";

const MusicPage = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="background">
      <h1
        className="banner_title"
        style={{ textAlign: "center", paddingTop: "5rem" }}
      >
        some songs I have on repeat right now
      </h1>
      <div style={loaded ? { display: "none" } : {}}>
        <Skeleton style={{ width: "900px", height: "800px" }} />
      </div>
      <div style={loaded ? { paddingBottom: "100px" } : { display: "none" }}>
        <iframe
          id="spotifyPlaylist"
          title="myFrame"
          src="https://open.spotify.com/embed/playlist/0EdYsdvhhan3ogRqMRbsIJ?utm_source=generator"
          width="900"
          height="600"
          frameBorder="0"
          allowtransparency="true"
          style={{ textAlign: "center" }}
          onLoad={handleLoad}
        ></iframe>
      </div>
      <Footer color="#a98451"/>
    </div>
  );
};

export default MusicPage;
