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
          title={"Assets (the people, offices, and programs faculty and staff turn to for support for advising work)"}
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
          title={"Champions ( people or offices who use their position to influence, encourage, or motivate others around advising)"}
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
          title={"Stewards (people or places on campus where money or other resources to support advising are located)"}
          data={stewardsBubble}
        />
      </Grid>
    </Grid>
  );
};

export default FacultyPage;
