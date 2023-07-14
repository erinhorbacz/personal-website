import { Skeleton } from "@mui/material";
import "./music.css";
import { useState } from "react";

const MusicPage = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  }

  return (
    <div className="background">
      <h1 className="banner_title" style={{ textAlign: "center" }}>
        some songs I have on repeat right now
      </h1>
      <div style={loaded ? { display: "none" } : {}}>
        <Skeleton style={{ width: "1000px", height: "1000px" }} />
      </div>
      <div style={loaded ? {} : { display: "none" }}>
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
    </div>
  );
};

export default MusicPage;
