import { Outlet, Link } from "react-router-dom";
import Heading from "./components/Heading";

const Home = () => {
  return (
    <>
      <section>
        <Heading text={"Grinnell College Advising Data"} />
      </section>
      <nav>
        <ul>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/faculty">Faculty</Link>
          </li>
          <li>
            <Link to="/staff">Staff</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Home;
