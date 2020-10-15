import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar({ links }) {
  return (
    <div>
      {links.map(({ name, path }) => (
        <ul>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "black",
            }}
            key={path}
            exact
            to={path}
          >
            {name}
          </NavLink>
        </ul>
      ))}
    </div>
  );
}
