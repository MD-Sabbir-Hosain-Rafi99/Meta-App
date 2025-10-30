import React from "react";
import { Link } from "react-router";

const NavLink = ({ route }) => {
  return (
    <Link to={route.path} className="hover:text-sky-600">
      {route.name}
    </Link>
  );
};

export default NavLink;
