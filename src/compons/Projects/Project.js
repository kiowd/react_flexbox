import React from "react";
import { FaPhotoVideo, FaLink  } from "react-icons/fa";
import './project.css';
import Zoom from 'react-reveal/Zoom';


const Project = ({project}) => {
  const { img = "", title = "", info = "" } = project;
  return(
    <Zoom>
      <article className="projects_single_project">
        <img src={img} alt="room " className="projects_single_project_img"/>
        <a href='https://unsplash.com/' target='_blank' rel='noreferrer' className="projects_single_project_icon">
        <FaPhotoVideo className='video'/>
        <FaLink className='link'/>
        </a> 
                
      </article>
    </Zoom>  
      
    
  );
};

export default Project;