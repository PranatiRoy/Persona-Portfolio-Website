import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Skills</span>
        <span></span>
        <spane>
          The graph beside represents my skill related to Frontend development.
          <br />
          hope you have an understanding.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ top: "7rem" }}
          whileInView={{ top: "1rem" }}
          whileOutView={{ top: "1rem" }}
          transition={transition}
        >
        <div class="skill-graph">
          <div class="container">
            <div class="skills html"> <span></span>HTML 99%</div>
          </div>
          <div class="container">
            <div class="skills css"><span></span>CSS 98%</div>
          </div>
          <div class="container">
            <div class="skills js"><span></span>JavaScript 95%</div>
          </div>
          <div class="container">
            <div class="skills react"><span></span>ReactJS 95%</div>
          </div>
          <div class="container">
            <div class="skills java"><span></span>Java 88%</div>
          </div>
          <div class="container">
            <div class="skills python"><span></span>Pyhton 88%</div>
          </div>
          </div>
        </motion.div>
        {/* second card */}
        {/* <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div> */}
        {/* 3rd */}
        {/* <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div> */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
