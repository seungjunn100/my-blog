import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav className="site-header__nav">
      <ul className="site-header__ul">
        <li className="site-header__list">
          <NavLink to="/" className="site-header__link">Home</NavLink>
        </li>
        <li className="site-header__list">
          <NavLink to="/notes" className="site-header__link">Notes</NavLink>
        </li>
      </ul>
    </nav>
  );
}