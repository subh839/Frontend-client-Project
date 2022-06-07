import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Typewriter } from "react-simple-typewriter"
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Work</h1>
      <h2>
              WELCOME
              <span>
                <Typewriter words={["TO DIGIFIC SOLUTION", "ALL SERVICES ARE PRVIDED HERE."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
