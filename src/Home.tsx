import Heading from "./components/Heading";
import { Grid } from "@mui/material";
import { advisinglandscape } from "./data/home/advising";
import { CircularPacking } from "./charts/CirclePacking";
import { useState } from "react";
import { onclickdefs } from "./data/home/onclickevent";

const Home = () => {
  const [hoveredNode, setHoveredNode] = useState("");
  const HoverTooltip = () => {
    if (hoveredNode.length === 0)
      return <p className="na">Hover over an entity to view details.</p>;

    if (hoveredNode in onclickdefs)
      return (
        <>
          <h4>What do {hoveredNode} help with?</h4>
          {onclickdefs[hoveredNode as keyof typeof onclickdefs]
            .split("\n")
            .map((e, i) => (
              <li key={`${i}-${e}`} className="subsubtitle">
                {e}
              </li>
            ))}
        </>
      );
    return (
      <>
        <h4>What do {hoveredNode} help with?</h4>
        <p className="na">No details available</p>
      </>
    );
  };

  return (
    <section>
      <Heading text={"Visualizing the Advising Landscape at Grinnell"} />
      <Grid container spacing={1} style={{ height: "100%" }}>
        <Grid
          item
          xs={9}
          className="grid-container sankey-concon"
          style={{ height: 600 }}
        >
          <Grid item xs={12} className="grid-container no-outline sankey-con">
            <h2 className="title">{"Advising Landscape at Grinnell"}</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularPacking
                data={advisinglandscape}
                width={window.innerWidth - 350}
                height={600}
                setHoveredNode={setHoveredNode}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={3} className="grid-container sankey-concon">
          <Grid item xs={12} className="grid-container no-outline sankey-con">
            <HoverTooltip />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;
