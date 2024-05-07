import { NavLink as Link } from "react-router-dom";

function NavLink({ children, to, ...rest }) {
  return (
    <Link
      to={to}
      className={({ isActive }) =>
        isActive ? "stroke-fitness-dlight" : "stroke-slate-600"
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
