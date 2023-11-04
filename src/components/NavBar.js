import React from "react";
import { NavLink } from "react-router-dom";
//Add some basic styling to the Navlinks
const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "orange",
  textDecoration: "none",
  color: "white",
  borderRadius: "20px", 
 

};

function NavBar() {
  return (
  <div className="navbar">
    
    <NavLink to="/" exact style={link}>Home</NavLink>
   
    
    <NavLink to="/movies" exact style={link}>Movies</NavLink>
   
    
    <NavLink to="/directors" exact style={link}>Directors</NavLink>
    
    <NavLink to="/actors" exact style={link}>Actors</NavLink>


  </div>
  );
}

export default NavBar;
