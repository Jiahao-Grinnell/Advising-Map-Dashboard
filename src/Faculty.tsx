import Grid from "@mui/material/Grid";

import BubbleChartNivo from "./charts/BubbleChartNivo";

import { stewardsBubble } from "./data/faculty/stewards";
import { championBubble } from "./data/faculty/champions";
import { assetBubble } from "./data/faculty/assets";
import Heading from "./components/Heading";

const FacultyPage = () => {
  return (
    <Grid container spacing={1} style={{ height: "100%" }}>
      <Grid item xs={12}>
        <Heading text={"Faculty Advising Input"} />
      </Grid>
      <Grid
        item
        xs={12}
        className="grid-container"
        style={{ minHeight: "100vh" }}
      >
        <BubbleChartNivo
          title={"Assets (as Identified by Faculty)"}
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
          title={"Champion (as Identified by Faculty)"}
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
          title={"Stewards (as Identified by Faculty)"}
          data={stewardsBubble}
        />
      </Grid>
    </Grid>
  );
};

export default FacultyPage;
