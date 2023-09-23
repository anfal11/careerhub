import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li className="font-medium text-base">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink to="/applied">Applied Jobs</NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );
  return (
    <div style={{background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"}}>
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <NavLink className="btn btn-ghost normal-case text-xl" to="/">
              CareerHub
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <Link to="/jobs">
            <button className='rounded font-bold px-4 py-3 text-white' style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}}>Stary Applying</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
