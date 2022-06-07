import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "../styles/Footer.css";
import { Typewriter } from "react-simple-typewriter";
import Logo from "../assets/Logo.png";
function Footer() {
  return (
    <div className="footer">
    
      <div className="socialMedia">
              <h4>Follow Us on:   </h4>
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon /> <WhatsAppIcon/>
      </div>
      <h2> &copy; 2022 DigificSolution .com . All rights reserved</h2>
    </div>
  );
}

export default Footer;