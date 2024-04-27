import { ResponsiveSankey } from "@nivo/sankey";
import Heading from "./components/Heading";
import { Link, Node } from "./charts/students/AdvisingEntities";
import { Grid } from "@mui/material";
import { links, nodes } from "./data/home/allSankey";
import BubbleChartNivo from "./charts/BubbleChartNivo";
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
              width={1000}
              height={600}
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;
