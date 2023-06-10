import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navList = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Gallery",
      href: "/gallery"
    },
    {
      name: "About",
      href: "/about"
    }
  ];

  return (
    <div className="Nav">
      <h3>r-log</h3>
      <ul className="navlinks">
        {navList.map((link) => (
          <li>
            <Link to={link.href} className="link">{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
