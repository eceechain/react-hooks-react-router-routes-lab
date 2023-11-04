import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <div>
    <NavLink to="/" exact>Home</NavLink>
    </div>
     <div>
    <NavLink to="/movies" exact>Movies</NavLink>
    </div>
     <div>
    <NavLink to="/directors" exact>Directors</NavLink>
    </div>
    <NavLink to="/actors" exact>Actors</NavLink>


  </div>
  );
}

export default NavBar;
