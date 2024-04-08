import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className=" flex justify-center items-center gap-4 bg-sky-500 py-3 text-white">
        <li className="hover:text-sky-200">
          <NavLink
            className={({ isActive }) => (isActive ? " text-indigo-900" : "")}
            to={`/`}
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-sky-200">
          <NavLink
            className={({ isActive }) => (isActive ? " text-indigo-900" : "")}
            to={`/about`}
          >
            About
          </NavLink>
        </li>
        <li className="hover:text-sky-200">
          <NavLink
            className={({ isActive }) => (isActive ? " text-indigo-900" : "")}
            to={`/contact`}
          >
            Contact
          </NavLink>
        </li>
        <li className="hover:text-sky-200">
          <NavLink
            className={({ isActive }) => (isActive ? " text-indigo-900" : "")}
            to={`/cardList`}
          >
            CardList
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
