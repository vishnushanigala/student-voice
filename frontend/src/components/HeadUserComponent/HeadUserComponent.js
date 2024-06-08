import React from 'react';
import "./head1.css";
import logo from "./logo.webp";
import user from "./user.webp";
import newGif from "./new.gif";
import { NavLink, useNavigate } from "react-router-dom";

function HeadUserComponent() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="head2">
      <img src={logo} width="1500" height="100" alt="Logo" />
      &nbsp;&nbsp;&nbsp;
      <nav className="nav-bar">
        <div className="box">
          <div className="Name">
            <div className="img">
              <img id="img1" src={user} alt="User" />
            </div>
            <div className="Name">{localStorage.getItem("username")}</div>
          </div>

          <div className="box1">
            <NavLink to="/userhome" id="text">Home</NavLink>
          </div>
          <div className="box1">
            <NavLink to="/dashboard" id="text">Dashboard</NavLink>
          </div>
          <div className="box1">
            <NavLink to="/usercontact" id="text">Contact Us</NavLink>
          </div>
          <div className="box2">
            <button id="but1" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
      <div className="scroll">
        <div className="scroll-bar">
          <span>UPDATES |</span>
        </div>
        <div className="scroll-con">
          <marquee>
            <pre>
              <img src={newGif} id="new-img" alt="New" />
              Raise an Anonymous Complaint <img src={newGif} id="new-img" alt="New" />
              B.Tech III YEAR I SEM Regular Examinations (R18/B21) held in January-2024
            </pre>
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default HeadUserComponent;
