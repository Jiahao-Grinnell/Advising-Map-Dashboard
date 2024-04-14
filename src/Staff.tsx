import React from "react";
import Grid from "@mui/material/Grid";

import PieChartNivo from "./charts/PieChartNivo";
import BubbleChartNivo from "./charts/BubbleChartNivo";

import { stewardsBubble, stewardsPie } from "./data/staff/stewards";
import { championPie, championBubble } from "./data/staff/champions";
import { assetPie, assetBubble } from "./data/staff/assets";
import { desiredPie, plentifulPie } from "./data/staff/plentifuldesired";
import { gapsPie } from "./data/staff/gaps";
import Heading from "./components/Heading";

const StaffPage = () => {
  return (
    <Grid container spacing={1} style={{ height: "100%" }}>
      <Grid item xs={12}>
        <Heading text={"Staff Advising Input"} />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <PieChartNivo
          title={"Assets (as Identified by Staff)"}
          data={assetPie}
        />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <BubbleChartNivo
          title={"Assets (as Identified by Staff)"}
          data={assetBubble}
        />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <PieChartNivo
          title={"Stewards (as Identified by Staff)"}
          data={stewardsPie}
        />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <BubbleChartNivo
          title={"Stewards (as Identified by Staff)"}
          data={stewardsBubble}
        />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <PieChartNivo
          title={"Champion (as Identified by Staff)"}
          data={championPie}
        />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <BubbleChartNivo
          title={"Champion (as Identified by Staff)"}
          data={championBubble}
        />
      </Grid>
      {/* // */}
      <Grid item xs={4} className="grid-container" style={{ minHeight: 600 }}>
        <PieChartNivo
          title={"Resources Seen as Plentiful"}
          data={plentifulPie}
        />
      </Grid>
      <Grid item xs={4} className="grid-container" style={{ minHeight: 600 }}>
        <PieChartNivo title={"Desired Resources"} data={desiredPie} />
      </Grid>
      <Grid item xs={4} className="grid-container" style={{ minHeight: 600 }}>
        <PieChartNivo title={"Gaps Noted"} data={gapsPie} />
      </Grid>
      {/* // */}
    </Grid>
  );
};

export default StaffPage;
