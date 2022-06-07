import React from "react";
import MultiplePizzas from "../assets/best.png";
import "../styles/Whyus.css";
import { Typewriter } from "react-simple-typewriter"
function Whyus() {
  return (
    <div className="whyus">
      <div
        className="whyusTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="whyusBottom">
       
        <h2>
              Why We Are the Best Choice
              <span>
                <Typewriter words={[" DIGIFIC SOLUTION", "ALL SERVICES ARE PROVIDED HERE."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <p>
            <h2>Respect Client's Choice</h2>
            <h2>Project update on every step</h2>
            <h2>Handled Multiple Projects and Clients.</h2>
            </p>
          </div>
          </div>
      </section>
      
      </div>
    </div>
  );
}

export default Whyus;
