import React from "react";
import Grid from "@mui/material/Grid";

import AdvisingEntities from "./charts/students/AdvisingEntities";
import DropdownSelector from "./components/DropdownSelector";

import {
  advEntitiesNodes,
  advEntitiesLinks,
  advEntitiesOptions,
} from "./data/summary/advEntities";

import { Node, Link } from "./charts/students/AdvisingEntities";
import Heading from "./components/Heading";

const SummaryPage = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const data = { nodes: advEntitiesNodes, links: advEntitiesLinks };
  const fAdvEntitiesNodes: Node[] = [];
  const fAdvEntitiesLinks: Link[] = [];
  const putAlready: any = {};

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
        <Heading text={"New Title?"} />
      </Grid>
      <Grid item xs={3} className="grid-container" style={{ minHeight: 680 }}>
        <DropdownSelector
          toggl={() => {}}
          options={advEntitiesOptions}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          addElem={() => {}}
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
    </Grid>
  );
};

export default SummaryPage;
