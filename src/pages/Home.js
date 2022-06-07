import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/devoloper.png";
import "../styles/Home.css";
import { Typewriter } from "react-simple-typewriter"
import Logo from '../assets/mail.png';
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <h2>
              WELCOME
              <span>
                <Typewriter words={["TO DIGIFIC SOLUTION", "ALL SERVICES ARE PRVIDED HERE."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

        <h2> Digific Solution </h2>
        <h3>Click below to send a mail to us </h3>
        <img src={Logo}/><br/>
        <a href="mailto:subhasishhalder107@gmail.com">Click Me</a>
        <p> Solution To your Work </p>
        <Link to="/menu">
          <button>Let's Collaborate</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;