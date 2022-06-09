import React, { Component } from 'react';
import "./About.css";
import profile_image from "../assets/IMG_5804.JPG";  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              src = {profile_image} 
              className="profile_image"
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jesse Ding</div>
            <div className="brief_description">
              I am a sophomore majoring in computer science at Carnegie Mellon.
            </div>
          </div>
        </div> 
      </div>
    )
  }
}