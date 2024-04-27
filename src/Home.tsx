import Heading from "./components/Heading";
import { Grid } from "@mui/material";
import { advisinglandscape } from "./data/home/advising";
import { CircularPacking } from "./charts/CirclePacking";

const Home = () => {
  return (
    <section>
      <Heading text={"Visualizing the Advising Landscape at Grinnell"} />
      <Grid
        item
        xs={12}
        className="grid-container sankey-concon"
        style={{ height: 600 }}
      >
        <Grid item xs={12} className="grid-container no-outline sankey-con">
          <h2 className="title">{"Advising Landscape at Grinnell"}</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularPacking
              data={advisinglandscape}
              width={window.innerWidth - 100}
              height={600}
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;
