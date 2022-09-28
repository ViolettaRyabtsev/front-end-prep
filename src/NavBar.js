import MenuDropdown from "./MenuDropdown";
import { useState } from "react";
import data from "./manifest.json";
import { CountContext } from "./ContextTutorial";
import "./App.css";

const NavBar = () => {
  const [title, setTitle] = useState("nothing");
  console.log(title);
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          {data.map((item) => {
            return (
              <li className="dropdown-menu">
                {item.title}
                <MenuDropdown sub={item.submenu} title={item.title} />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
