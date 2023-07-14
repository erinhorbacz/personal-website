import * as React from "react";

import { Typography, TextField, Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { send } from "emailjs-com";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./comment.css";
import classes from "./WelcomePage.module.css";
import { useInView } from "react-intersection-observer";

//each textfield has attributes value and defaultvalue which can be used if we want our page to open with an example

function Comment({submitted}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
        color: "#fff",
      },
      secondary: {
        main: "#11cb5f",
      },
    },
  });

  var name = "";
  var message = "";

  const getName = (event) => {
    name = event.target.value;
  };
  const getMessage = (event) => {
    message = event.target.value;
  };
  const handleChange = (event) => {
    console.log(name);
    console.log(message);
    document.getElementById("box").style.display = "none";
    // document.getElementById("thanks").style.display = "inline";
    submitted();

    var values = { from_name: name, message: message };

    send("service_svp0xpi", "template_g5cfn8a", values, "kX1NCqInDfHtVBHrj");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="Issue">
        <Typography
          id="thanks"
          style={{ display: "none", fontSize: "20px", fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif' }}
          sx={{ m: 1 }}
        >
          {/* <div className={inView ? "footer-view" : "footer"} ref={ref}> */}
          Thanks for submitting!
        {/* </div> */}
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          id="box"
        >
          <div className={inView ? "footer-view" : "footer"} ref={ref}>
            <TextField
              id="outlined-multiline-flexible_sub"
              placeholder="Your name..."
              // value={name}
              multiline
              maxRows={0.5}
              sx={{ width: "300px" }}
              onChange={getName}
            />
          </div>

          <div className={inView ? "footer-view" : "footer"} ref={ref}>
            <TextField
              id="outlined-multiline-flexible_mess"
              placeholder="Your Message..."
              // value={message}
              multiline
              rows={2}
              sx={{ width: "300px" }}
              style={{ color: "white" }}
              onChange={getMessage}
            />
          </div>
          <button className="icon-button" onClick={handleChange}>
            <div className={inView ? "footer-view" : "footer"} ref={ref}>
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="icon"
              style={{ fontSize: 25, color: "white", paddingTop: "10px" }}
            ></FontAwesomeIcon>
            </div>
          </button>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Comment;
