import { NavLink } from "react-router-dom";

const NavComponent = () => {
    return ( 
    <nav className="nav-bar">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='basicform'>Basic Form</NavLink>
        <NavLink to='advancedform'>Advanced Form</NavLink>
        <NavLink to='thenform'>Then Form</NavLink>
        <NavLink to='YetAnotherForm'>Yet Another Form</NavLink>
    </nav>
     );
}
 
export default NavComponent;