import React from "react";
import Grid from "@mui/material/Grid";

import AdvisingEntities from "../charts/AdvisingEntities";
import ChampionsBar from "../charts/ChampionsBar";
import StewardsBar from "../charts/StewardsBar";
import GapThemes from "../charts/GapThemes.jsx";

const Dashboard = () => (
  <Grid container spacing={1}>
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
      <GapThemes />
    </Grid>
    <Grid item xs={8} className="grid-container">
      <Grid item xs={12} className="grid-container no-outline">
        <h1>Stewards</h1>
      </Grid>
      <Grid item xs={12} className="grid-container no-outline">
        <h1>Champions</h1>
      </Grid>
    </Grid>
    <p className="footer">Made by Avaash Bhattarai '26 for DASIL</p>
  </Grid>
);

export default Dashboard;
