import classes from "../../pages/welcome_page/WelcomePage.module.css";
import Stack from "@mui/material/Stack";
import { useInView } from "react-intersection-observer";

const Bottom = ({ color }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  console.log(color);

  return (
    // style={{width: '1440px', height: "110px", overflow: 'hidden', backgroundColor: color}}
    <div
      className={classes.bottom}
      style={{ width: "100%", height: "110px", overflow: "hidden", backgroundColor: color }}>
      <div className={inView ? "footer-view" : "footer"} ref={ref}>
        <link
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          rel='stylesheet'
        />

        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
          spacing={4}
          sx={{ mt: 2, mb: 1 }}>
          <a
            href='https://github.com/erinhorbacz?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'>
            <i className='fa fa-github fa-4x icon-3d' style={{ fontSize: 50 }}></i>
          </a>
          <a href='mailto:erhorbacz@gmail.com' target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-envelope fa-4x icon-3d' style={{ fontSize: 50 }}></i>
          </a>
          <a
            href='https://www.linkedin.com/in/erin-horbacz/'
            target='_blank'
            rel='noopener noreferrer'>
            <i className='fa fa-linkedin fa-4x icon-3d' style={{ fontSize: 50 }}></i>
          </a>
          <a
            href='https://drive.google.com/file/d/1yW7a3vYJHKywufCMbtIRU73HHbsWPBW5/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'>
            <i className='fa fa-file fa-4x icon-3d' style={{ fontSize: 50 }}></i>
          </a>
        </Stack>
      </div>
    </div>
  );
};

export default Bottom;
