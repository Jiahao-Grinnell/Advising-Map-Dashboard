import { Outlet, Link } from "react-router-dom";
import Heading from "./components/Heading";

const Home = () => {
  return (
    <>
      <section>
        <Heading text={"Visualizing the Advising Landscape at Grinnell"} />
      </section>
    </>
  );
};

export default Home;
