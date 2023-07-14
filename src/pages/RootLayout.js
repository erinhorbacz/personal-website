import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import classes from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <main className={classes.content}>
        {/* <NavBar /> */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
