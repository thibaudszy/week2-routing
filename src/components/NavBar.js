import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ links }) {
  return (
    <div>
      {links.map(({ name, path }) => (
        <NavLink
          exact
          to={path}
          activeStyle={{
            fontWeight: "bold",
            color: "black",
          }}
          key={path}
          to={path}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
}
