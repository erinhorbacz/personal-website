import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const tabs = ["home", "art", "photography", "music", "pursuits"];
  return (
    <header className={classes.header}>
      {/* <button className={classes.button}>hey</button> */}
      <nav>
        <ul className={classes.list}>
          {tabs.map((tab) => (
            <li>
              <Link to={`/${tab}`}>{tab}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
