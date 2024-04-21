import React from "react";
import Grid from "@mui/material/Grid";

import AdvisingEntities from "./charts/students/AdvisingEntities";
import DropdownSelector from "./components/DropdownSelector";

import {
  advEntitiesNodes,
  advEntitiesLinks,
  advEntitiesOptions,
} from "./data/students/advEntities";
import { Node, Link } from "./charts/students/AdvisingEntities";
import ThemesList, { Theme } from "./components/ThemesList";
import { stuThemesData } from "./data/students/stuThemesData";
import { entitiesDef } from "./data/students/entitiesDef";
import Heading from "./components/Heading";

const StudentsPage = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const data = { nodes: advEntitiesNodes, links: advEntitiesLinks };
  const fAdvEntitiesNodes: Node[] = [];
  const fAdvEntitiesLinks: Link[] = [];
  const putAlready: any = {};

  const [stuThemes, setStuThemes] = React.useState<Theme[]>([]);
  const [entThemes, setEntThemes] = React.useState<Theme[]>([]);

  const handleThemeClick = (
    selectedId: string,
    all_themes: any,
    themes: Theme[],
    setter: (_: Theme[]) => void
  ) => {
    const selectedThemesId = themes.map((theme) => theme._id);
    const thisAdvLinks = advEntitiesLinks
      .filter(({ source }) => selectedThemesId.includes(source))
      .map(({ target }) => target);

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

    const newDefs = [];
    for (let i = 0; i < thisAdvLinks.length; i++)
      newDefs.push({
        _id: thisAdvLinks[i],
        v: entitiesDef[thisAdvLinks[i] as keyof typeof entitiesDef],
      });

    setEntThemes(newDefs);
  };

  const stuThemehandler = (k: string) =>
    handleThemeClick(k, stuThemesData, stuThemes, setStuThemes);

  data.links.forEach((link: Link) => {
    if (selectedOptions.includes(link.source)) fAdvEntitiesLinks.push(link);
  });
  data.nodes.forEach((node: Node) => {
    if (selectedOptions.includes(node.id)) {
      if (putAlready[node.id] !== true) fAdvEntitiesNodes.push(node);
      putAlready[node.id] = true;
    }
  });
  fAdvEntitiesLinks.forEach((link) => {
    if (putAlready[link.source] !== true)
      fAdvEntitiesNodes.push({ id: link.source });
    if (putAlready[link.target] !== true)
      fAdvEntitiesNodes.push({ id: link.target });
    putAlready[link.source] = true;
    putAlready[link.source] = true;
  });

  return (
    <Grid container spacing={1} style={{ height: "100%" }}>
      <Grid item xs={12}>
        <Heading
          text={
            "Academic Advising Questions Students Seek Answers to (and From Whom)"
          }
        />
      </Grid>
      <Grid item xs={3} className="grid-container" style={{ minHeight: 680 }}>
        <DropdownSelector
          toggl={() => {}}
          options={advEntitiesOptions}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          addElem={stuThemehandler}
        />
      </Grid>
      <Grid item xs={9} className="grid-container sankey-concon">
        <Grid item xs={12} className="grid-container no-outline sankey-con">
          {fAdvEntitiesNodes.length > 0 && fAdvEntitiesLinks.length > 0 && (
            <AdvisingEntities
              data={{ nodes: fAdvEntitiesNodes, links: fAdvEntitiesLinks }}
            />
          )}
          {fAdvEntitiesNodes.length === 0 && (
            <p className="na">
              Please select a category (dropdown to the left)
            </p>
          )}
        </Grid>
      </Grid>
      <Grid item xs={6} className="grid-container">
        <ThemesList
          title={"Selected Student Advising Questions"}
          themes={stuThemes}
        />
      </Grid>
      <Grid item xs={6} className="grid-container">
        <ThemesList
          title={"Advising Entity (based on student data)"}
          themes={entThemes}
        />
      </Grid>
    </Grid>
  );
};

export default StudentsPage;
