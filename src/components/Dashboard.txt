import React from "react";
import Grid from "@mui/material/Grid";

import AdvisingEntities from "../charts/AdvisingEntities";
import ChampionsBar from "../charts/ChampionsBar";
import StewardsBar from "../charts/StewardsBar";
import GapThemes from "../charts/GapThemes.jsx";
import ThemesList from "./ThemesList";
import StewardsSankey from "../charts/StewardsSankey";

const Dashboard = () => {
  const [themes, setThemes] = React.useState([]);

  return (
    <Grid container spacing={1} style={{ height: "100%" }}>
      <Grid item xs={8} className="grid-container">
        <Grid
          item
          xs={12}
          className="grid-container no-outline inside-grid no-top-padding"
        >
          <StewardsBar />
        </Grid>
        <Grid item xs={12} className="grid-container no-outline inside-grid">
          <ChampionsBar />
        </Grid>
      </Grid>
      <Grid item xs={4} className="grid-container">
        <AdvisingEntities />
      </Grid>
      <Grid item xs={4} className="grid-container">
        <GapThemes themes={themes} setThemes={setThemes} />
      </Grid>
      <Grid item xs={8} className="grid-container">
        <ThemesList themes={themes} />
      </Grid>
      <Grid item xs={12} className="grid-container sankey-concon">
        <Grid item xs={12} className="grid-container no-outline sankey-con">
          <StewardsSankey />
        </Grid>
      </Grid>
      <p className="footer">
        Made by Avaash Bhattarai '26 and Jiahao Deng for DASIL
      </p>
    </Grid>
  );
};

export default Dashboard;
