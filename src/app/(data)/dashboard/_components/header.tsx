const Header = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <label htmlFor="dashboard-drawer" className="drawer-button lg:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <a className="btn btn-ghost text-xl">bio trend</a>
      </div>
    </div>
  );
};

export default Header;
