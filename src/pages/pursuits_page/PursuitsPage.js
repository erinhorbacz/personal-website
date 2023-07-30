import "./pursuits.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import Footer from "../../components/footer_section/Footer";

const PursuitsPage = () => {
  const [profExpanded, setProfExpanded] = useState(false);
  const [persExpanded, setPersExpanded] = useState(false);

  const expandProf = () => {
    setProfExpanded(!profExpanded);
    setShouldRunEffect(true);
  };

  const expandPers = () => {
    setPersExpanded(!persExpanded);
    setShouldRunEffect(true);
  };

  const bottomRef = useRef(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    // bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [shouldRunEffect, setShouldRunEffect] = useState(false);
  // const shouldRunEffect= false;

  useEffect(() => {
    if (shouldRunEffect) {
      scrollToBottom(); // Scroll to bottom when component mounts or height changes
    }
  }, [expandPers, expandProf]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="background_pursuits">
          <div className="professional">
            <div className="pursuit_header">
              <h2 className="banner_title">Professional Goals</h2>
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={expandProf}
              >
                {profExpanded ? (
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="icon"
                    style={{ fontSize: 25, color: "white", paddingTop: "10px" }}
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 25, color: "white", paddingTop: "10px" }}
                  ></FontAwesomeIcon>
                )}
              </button>
            </div>
            <div className="content_box">
              <div
                className={`pursuit_content text ${
                  profExpanded ? "expanded" : "inactive"
                }`}
              >
                <p style={{ width: "600px", textAlign: "justify" }}>
                  {" "}
                  Among many things, I have a passion for Software Engineering.
                  I enjoy the process of creating elegant programs from code and
                  problem solving the most efficient solutions (although I can't
                  say I always love the head banging debugging process). <br />
                  <br />
                  Although most of my expertise lies in Front-End Development, I
                  also have an interest in Machine Learning. I've taken a few
                  courses on the topic, but I would like to someday get some
                  experience working on an ML team. <br />
                  <br />
                  Although I've spent a lot of time in the lab, what I really
                  love is industry work. I've loved my previous experience
                  working in industry, and I see myself working as a Software
                  Engineer in Tech for the forseable future.
                </p>
              </div>
            </div>
            <div ref={bottomRef} />
          </div>

          <div className="personal">
            <div className="pursuit_header">
              <h2 className="banner_title">Personal Goals</h2>
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={expandPers}
              >
                {persExpanded ? (
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="icon"
                    style={{ fontSize: 25, color: "white", paddingTop: "10px" }}
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 25, color: "white", paddingTop: "10px" }}
                  ></FontAwesomeIcon>
                )}
              </button>
            </div>
            <div className="content_box">
              <div
                className={`pursuit_content text ${
                  persExpanded ? "expanded" : "inactive"
                }`}
              >
                <p style={{ width: "600px", textAlign: "justify" }}>
                  You've gotten to see some of my ameatur artwork here on this
                  site, but I'd love to take some real art lessons and improve
                  my skills. I plan on investing in myself (once I have the
                  means to do so) by taking some painting lessons. As of now, I
                  rely on the free ones that Bob Ross provides. <br />
                  <br />
                  I'm a very social person who loves the chaos and noise of a
                  city. I want to live in a big city throughout my early career
                  and experience all there is to offer- everything from art
                  museaums to dog walking clubs. My favorite city is New York,
                  and it's been my dream since I was a kid to be a New Yorker.
                  I'm looking forward to calling it home... although I am not
                  looking forward to the rent.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(74, 47, 55, 0.40)",
            // transform: 'translate(100px, 100px)'
          }}
        >
          <Footer
            color="rgba(74, 47, 55, 0.8)"
            style={{ transform: "translate(100px, 100px)" }}
          />
        </div> */}
      </div>
      <Footer color="rgba(74, 47, 55, 0.8)" />
    </>
  );
};

export default PursuitsPage;
