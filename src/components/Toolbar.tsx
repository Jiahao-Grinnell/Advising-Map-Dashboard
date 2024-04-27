import { Link } from "react-router-dom";
import "../styles/Toolbar.css"; // assuming you have a CSS file for styling

const Toolbar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Grinnell_College_logo.png"
          width={50}
          alt="Grinnell College logo"
        ></img>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/faculty">Faculty</Link>
          </li>
          <li>
            <Link to="/staff">Staff</Link>
          </li>
          <li>
            <Link to="/advisor-summary">Advisor Summary</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Toolbar;
