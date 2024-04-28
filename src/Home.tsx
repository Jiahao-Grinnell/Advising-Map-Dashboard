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

    return (
      <>
        <h4>What students report {hoveredNode} help with?</h4>
        {hoveredNode in onclickdefs.s ? (
          onclickdefs.s[hoveredNode as keyof typeof onclickdefs.s]
            .split("\n")
            .map((e, i) => (
              <li key={`${i}-${e}`} className="subsubtitle">
                {e}
              </li>
            ))
        ) : (
          <p className="na">Did not survey.</p>
        )}
        <h4>What {hoveredNode} report they help with?</h4>
        {hoveredNode in onclickdefs.fs ? (
          onclickdefs.fs[hoveredNode as keyof typeof onclickdefs.fs]
            .split("\n")
            .map((e, i) => (
              <li key={`${i}-${e}`} className="subsubtitle">
                {e}
              </li>
            ))
        ) : (
          <p className="na">Did not survey.</p>
        )}
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                overflow: "scroll",
              }}
            >
              <CircularPacking
                data={advisinglandscape}
                width={window.innerWidth * 0.7}
                height={600}
                setHoveredNode={setHoveredNode}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={3} className="grid-container sankey-concon">
          <Grid
            item
            xs={12}
            className="grid-container no-outline sankey-con"
            style={{ overflow: "scroll" }}
          >
            <HoverTooltip />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;
