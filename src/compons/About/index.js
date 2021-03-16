import React from "react";
import { FaCameraRetro, FaCamera } from "react-icons/fa";
import "./about.css";
import Roll from "react-reveal/Roll";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <section className="about">
      <div className="about_center">
        
        <article className="about_img">
        <Roll>
          <img
            src="https://images.unsplash.com/photo-1527935168229-c1cc0bdfa662?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzI4fHxjYW1lcmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            className="about_img_photo"
            alt='cameraes'
          />
          </Roll>
        </article>
        
        <Roll>
        <article className="about_info">
          <div className="about_info_container">
            <h1 className="about_info_title">about us</h1>
            <p className="about_info_text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
              
            </p>
            <a href='Resume.pdf'download className='pdf'>view information</a>
          </div>
          
        </article>
        
        </Roll>
      </div>
    </section>
  );
};

export default About;
