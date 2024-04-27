import Grid from "@mui/material/Grid";

import BubbleChartNivo from "./charts/BubbleChartNivo";

import { stewardsBubble } from "./data/staff/stewards";
import { championBubble } from "./data/staff/champions";
import { assetBubble } from "./data/staff/assets";
import Heading from "./components/Heading";

const StaffPage = () => {
  return (
    <Grid container spacing={1} style={{ height: "100%" }}>
      <Grid item xs={12}>
        <Heading text={"Staff Advising Input"} />
      </Grid>
      <Grid
        item
        xs={12}
        className="grid-container"
        style={{ minHeight: "100vh" }}
      >
        <BubbleChartNivo
          title={"Assets (as Identified by Staff)"}
          data={assetBubble}
        />
      </Grid>
      <Grid
        item
        xs={12}
        className="grid-container"
        style={{ minHeight: "100vh" }}
      >
        <BubbleChartNivo
          title={"Champion (as Identified by Staff)"}
          data={championBubble}
        />
      </Grid>
      <Grid
        item
        xs={12}
        className="grid-container"
        style={{ minHeight: "100vh" }}
      >
        <BubbleChartNivo
          title={"Stewards (as Identified by Staff)"}
          data={stewardsBubble}
        />
      </Grid>
    </Grid>
  );
};

export default StaffPage;
