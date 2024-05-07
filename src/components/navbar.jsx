/* eslint-disable import/no-unresolved */
// import homeLight from "../icon/home-light.svg";
// import homeDark from "../icon/home-dark.svg";
// import programm from "../icon/programm.png";
// import profile from "../icon/profile.png";

import NavLink from "./Navlink";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center bg-black h-12 w-svh">
      <div>
        <NavLink to="/">
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8562 2.29347L2.47977 9.47202C1.98545 9.85046 1.69556 10.4375 1.69556 11.0601L1.69556 17.0178L1.69556 21.6372C1.69556 22.7418 2.59099 23.6372 3.69556 23.6372L7.43398 23.6372C8.53855 23.6372 9.43398 22.7418 9.43398 21.6372L9.43398 16.6504C9.43398 15.5458 10.3294 14.6504 11.434 14.6504L14.4023 14.6504C15.5069 14.6504 16.4023 15.5458 16.4023 16.6504L16.4023 21.6372C16.4023 22.7418 17.2978 23.6372 18.4023 23.6372L22.4485 23.6372C23.5531 23.6372 24.4485 22.7418 24.4485 21.6372L24.4485 11.0601C24.4485 10.4375 24.1586 9.85046 23.6643 9.47202L14.2878 2.29347C13.5704 1.74418 12.5737 1.74418 11.8562 2.29347Z"
              // stroke="#3A4151"
              // stroke-width="2"
            />
          </svg>
        </NavLink>
      </div>
      <div>
        <NavLink to="/excercise">
          <svg
            width="37"
            height="21"
            viewBox="0 0 37 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5.59033"
              y="1.82422"
              width="6.81208"
              height="17.3514"
              rx="2"
              // stroke-width="2"
            />
            <rect
              x="12.4026"
              y="13.906"
              width="6.81208"
              height="12.3387"
              rx="2"
              transform="rotate(-90 12.4026 13.906)"
              // stroke-width="2"
            />
            <rect
              x="24.7412"
              y="1.82422"
              width="6.81208"
              height="17.3514"
              rx="2"
              // stroke-width="2"
            />
            <rect
              x="31.5535"
              y="4.90894"
              width="4.39001"
              height="11.182"
              rx="2"
              // stroke-width="2"
            />
            <rect
              x="1.20044"
              y="4.90894"
              width="4.39001"
              height="11.182"
              rx="2"
              // stroke-width="2"
            />
          </svg>
        </NavLink>
      </div>
      <div>
        <NavLink to="/profile">
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13.072" cy="12.5" r="11.5" />
            <circle cx="13.072" cy="10.0549" r="4.33639" />
            <path
              d="M20.2987 21.7374C20.2987 17.1939 17.6155 14.5107 13.0721 14.5107C8.52864 14.5107 5.84546 17.1939 5.84546 21.7374"
              // stroke-width="2"
            />
          </svg>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
