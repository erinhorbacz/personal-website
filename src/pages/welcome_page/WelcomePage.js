import classes from "./WelcomePage.module.css";
import { Second_para } from "./Text";
import Stack from "@mui/material/Stack";
import "./icons.css";
import Comment from "./Comment";
import { useInView } from "react-intersection-observer";
import { Typography } from "@mui/material";
// import { ClassNames } from "@emotion/react";
// import {
//   Animated
// } from 'react-native-web';

const WelcomePage = () => {
  const styles = `
  body, html {
    background-color: #C4A484;
  }
`;

  document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const isSubmitted = () => {
    document.getElementById("thanks").style.display = "inline";
  };

  return (
    <>
      <div className={classes.welcomeContainer}>
        <header className={`${classes.text} ${classes.title}`}>
          about me.
        </header>
        {/* <div className={classes.first_line}> */}
        <Second_para className={`${classes.text} ${classes.aboutMe}`} />
        {/* <img className={classes.image} style={{'background-color':'transparent'}} src={image}/> */}
        {/* </div> */}
        <div className={classes.aboutMe} />
        {/* <First_para/> */}
        {/* <div
          className={`${inView ? "footer-view" : "footer"} ${classes.bottom}`}
          ref={ref}
        > */}
        <div className={classes.bottom} style={{transform: 'translateY(100px)'}}>
          <div
            className={`${classes.contact} ${classes.text}`}
            style={{ paddingLeft: "10px" }}
          >
            <div className={inView ? "footer-view" : "footer"} ref={ref}>
              <p>CONTACT ME</p>
              <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
              />

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={4}
                sx={{ mt: 1, mb: 1 }}
              >
                <a
                  href="https://github.com/terrenceshi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-github fa-4x icon-3d"
                    style={{ fontSize: 50 }}
                  ></i>
                </a>
                <a
                  href="mailto:erhorbacz@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-envelope fa-4x icon-3d"
                    style={{ fontSize: 50 }}
                  ></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/erin-horbacz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-linkedin fa-4x icon-3d"
                    style={{ fontSize: 50 }}
                  ></i>
                </a>
              </Stack>
            </div>
          </div>
          <div
            className={`${classes.contact} ${classes.text}`}
            style={{ paddingLeft: "70px" }}
          >
            <div className={inView ? "footer-view" : "footer"} ref={ref}>
              <p>CHECKOUT MY RESUME</p>
              <a
                href="https://drive.google.com/file/d/1MEBauwVmghDwHLBpUbDLIbOTn0oszybs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-file fa-4x icon-3d"
                  style={{ fontSize: 50 }}
                ></i>
              </a>
            </div>
          </div>
          <div className={`${classes.contact} ${classes.text}`}>
            <div className={inView ? "footer-view" : "footer"} ref={ref}>
              <p>LEAVE A COMMENT</p>
              <Typography
                id="thanks"
                style={{
                  display: "none",
                  fontSize: "20px",
                  fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
                }}
                sx={{ m: 1 }}
              >
                {/* <div className={inView ? "footer-view" : "footer"} ref={ref}> */}
                Thanks for submitting!
                {/* </div> */}
              </Typography>
            </div>
            <Comment submitted={isSubmitted} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
