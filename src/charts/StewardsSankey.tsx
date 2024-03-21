import React from "react";
import { ResponsiveSankey } from "@nivo/sankey";
import { stewardNodes, stewardLinks } from "../utils/stewardsSankey";

const StewardsSankey = () => {
  const data = {
    nodes: stewardNodes,
    links: stewardLinks,
  };

  data.nodes = data.nodes.filter(
    (node: any, index: number, self: any) =>
      index === self.findIndex((n: any) => n.id === node.id)
  );

  return (
    <>
      <h2 className="title">Stewards & Champions</h2>
      <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 50, bottom: 40, left: 50 }}
        align="justify"
        colors={{ scheme: "category10" }}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={18}
        nodeSpacing={3}
        nodeBorderWidth={0}
        nodeBorderColor={{
          from: "color",
          modifiers: [["brighter", 0.8]],
        }}
        nodeBorderRadius={3}
        linkOpacity={0.4}
        linkHoverOthersOpacity={0.1}
        linkContract={11}
        linkBlendMode="lighten"
        enableLinkGradient={true}
        enableLabels={false}
        labelPosition="outside"
        labelPadding={16}
        labelTextColor={{
          from: "color",
          modifiers: [["brighter", 1]],
        }}
      />
    </>
  );
};

export default StewardsSankey;
