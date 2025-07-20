import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    `text-gray-700 hover:text-blue-600 ${
      location.pathname === path ? "text-blue-600 font-semibold underline" : ""
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-6 py-2">
      <div className="flex items-center justify-between">
        {/* Logo and brand name */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3043/3043175.png"
            alt="logo"
            className="h-10 w-10"
          />
          <span className="text-3xl font-bold text-blue-600">StudySprint</span>
        </Link>

        {/* Navigation links with equal spacing */}
        <div className="flex items-center space-x-8">
          <Link to="/" className={linkStyle("/")}>Home</Link>
          <Link to="/groups" className={linkStyle("/groups")}>Groups</Link>
          <Link to="/dashboard" className={linkStyle("/dashboard")}>Dashboard</Link>
          <Link to="/exam-timelines" className={linkStyle("/exam-timelines")}>ExamTimelines</Link>

          <Link to="/login">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-100">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
