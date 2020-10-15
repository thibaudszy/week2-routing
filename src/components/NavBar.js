import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ links }) {
  return (
    <div>
      {links.map(({ name, path }) => (
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
      ))}
    </div>
  );
}
