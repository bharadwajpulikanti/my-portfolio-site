import classes from "./Heroimage.module.css";
import React from "react";
import { Link } from "react-router-dom";
import IntroImg from "../assets/intro-bg.jpg";

const Heroimage = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.mask}>
        <img className={classes.intoimg} src={IntroImg} alt="IntroImg" />
      </div>
      <div className={classes.content}>
        <p>HEY, I'M</p>
        <h1>Bharadwaj Pulikanti</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
