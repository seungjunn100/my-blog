import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/notes">Notes</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}