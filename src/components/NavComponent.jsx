import { NavLink } from "react-router-dom";
import React from "react";
const NavComponent = () => {
    return ( 
    <nav className="nav-bar">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='basicform'>Basic Form</NavLink>
        <NavLink to='feedbackform'>Feedback Form</NavLink>
        <NavLink to="newslettersignup">NewsLetter</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to={"advancedform"}>Advanced form</NavLink>
    </nav>
     );
}
 
export default NavComponent;