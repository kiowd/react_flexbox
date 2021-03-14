import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import { IconContext } from "react-icons";
import { sidebarData } from "./sidebar-data";
import "./nav.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <span className="logo">&#9878;</span>
          <Link to="#" className="menu-bars">
            <IoIcons.IoMenuOutline onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FaIcons.FaArrowCircleLeft className="fxEnd" />
              </Link>
            </li>
            {sidebarData.map((data, index) => {
              return (
                <li key={index} className={data.className}>
                  <Link to={data.path}>
                    {data.icon}
                    <span>{data.title}</span>
                  </Link>
                </li>
              );
            })}
            
            <li className='nav-text-socio'>
            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><FaIcons.FaFacebookSquare className='nav-text-socio-icon'/></a>
            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><FaIcons.FaInstagram className='nav-text-socio-icon'/></a>
            <FaIcons.FaTwitter className='nav-text-socio-icon'/>
            <FaIcons.FaPinterestSquare className='nav-text-socio-icon'/>
            </li>
            
            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
