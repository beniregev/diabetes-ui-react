import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      backgroundColor: isActive ? "yellow" : "blue",
      color: isActive ? "blue" : "yellow",
    };
  };
  return (
    <nav>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/add">
        Add
      </NavLink>
      <NavLink style={navLinkStyles} to="/bulk">
        Bulk
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
