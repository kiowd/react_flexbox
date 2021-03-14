import React from "react";
import { FaCameraRetro, FaCamera } from "react-icons/fa";
import "./banner.css";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner_container">
        <Fade right>
          <h1 className="banner_title">Camera Photos</h1>
        </Fade>

        <h1 className="banner_cameraTypes">
          <span>
            <FaCameraRetro className="camera" />
          </span>

          <span>
            <FaCamera className="camera" />
          </span>
        </h1>
        <div className="banner_info">
          <Typewriter
            options={{
              strings:
                "<p class='fontWriter'>It is a long established fact when looking at its layout.</p>",
              autoStart: true,
              loop: true,
              cursor: '',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
