import React from "react";
import Grid from "@mui/material/Grid";

import PieChartNivo from "./charts/PieChartNivo";
import BubbleChartNivo from "./charts/BubbleChartNivo";

import { stewardsBubble, stewardsPie } from "./data/faculty/stewards";
import { championPie, championBubble } from "./data/faculty/champions";
import { assetPie, assetBubble } from "./data/faculty/assets";
import { desiredPie, plentifulPie } from "./data/faculty/plentifuldesired";
import { gapsPie } from "./data/faculty/gaps";
import ThemesList, { Theme } from "./components/ThemesList";
import { gapThemesData } from "./data/faculty/gapThemes";
import { desiredThemesData } from "./data/faculty/desiredThemes";
import Heading from "./components/Heading";

const FacultyPage = () => {
  const [gapThemes, setGapThemes] = React.useState<Theme[]>([]);
  const [desThemes, setDesThemes] = React.useState<Theme[]>([]);

  const handleThemeClick = (
    selectedId: string,
    all_themes: any,
    themes: Theme[],
    setter: (_: Theme[]) => void
  ) => {
    let themeSelected = false;
    for (let i = 0; i < themes.length && !themeSelected; i++)
      themeSelected = selectedId === themes[i]._id;

    if (themeSelected) {
      const newThemes = themes.filter((t) => t._id !== selectedId);
      setter(newThemes);
    } else {
      const newThemes = [
        ...themes,
        { _id: selectedId, v: all_themes[selectedId] },
      ];
      setter(newThemes);
    }
  };

  const gapThemehandler = (k: string) =>
    handleThemeClick(k, gapThemesData, gapThemes, setGapThemes);

  const desThemehandler = (k: string) =>
    handleThemeClick(k, desiredThemesData, desThemes, setDesThemes);

  return (
    <Grid container spacing={1} style={{ height: "100%" }}>
      <Grid item xs={12}>
        <Heading text={"Faculty Advising Input"} />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <PieChartNivo title={"Assets Pie Chart"} data={assetPie} />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <BubbleChartNivo title={"Assets Bubble Chart"} data={assetBubble} />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <PieChartNivo title={"Stewards Pie Chart"} data={stewardsPie} />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <BubbleChartNivo
          title={"Stewards Bubble Chart"}
          data={stewardsBubble}
        />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <PieChartNivo title={"Champion Pie Chart"} data={championPie} />
      </Grid>
      <Grid item xs={6} className="grid-container" style={{ minHeight: 600 }}>
        <BubbleChartNivo
          title={"Champion Bubble Chart"}
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
        <PieChartNivo
          title={"Desired Resources"}
          data={desiredPie}
          onClick={desThemehandler}
        />
      </Grid>
      <Grid item xs={4} className="grid-container" style={{ minHeight: 600 }}>
        <PieChartNivo
          title={"Gaps Noted (categories AI generated)"}
          data={gapsPie}
          onClick={gapThemehandler}
        />
      </Grid>
      {/* // */}
      <Grid item xs={6} className="grid-container">
        <ThemesList title={"Desired Themes"} themes={desThemes} />
      </Grid>
      <Grid item xs={6} className="grid-container">
        <ThemesList title={"Gap Themes"} themes={gapThemes} />
      </Grid>
    </Grid>
  );
};

export default FacultyPage;
