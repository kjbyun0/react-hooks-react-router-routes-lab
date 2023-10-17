import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/movie/Doctor Strange'>movie1</NavLink>
      <NavLink to='/movie/Trolls'>movie2</NavLink>
      <NavLink to='/movie/Jack Reacher: Never Go Back'>movie3</NavLink>
      <NavLink to='/directors'>Directors</NavLink>
      <NavLink to='/actors'>Actors</NavLink>
    </nav>
    );
};

export default NavBar;
