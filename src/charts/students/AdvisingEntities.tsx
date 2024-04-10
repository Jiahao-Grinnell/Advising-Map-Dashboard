import { ResponsiveSankey } from "@nivo/sankey";

export type Node = {
  id: string;
};

export type Link = {
  source: string;
  target: string;
  value: number;
};

type Data = {
  nodes: Node[];
  links: Link[];
};

type AdvisingEntitiesProps = {
  data: Data;
};

const AdvisingEntities = ({ data }: AdvisingEntitiesProps) => {
  data.nodes = data.nodes.filter(
    (node: any, index: number, self: any) =>
      index === self.findIndex((n: any) => n.id === node.id)
  );

  return (
    <>
      <h2 className="title">Advising Entities</h2>
      <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 200, bottom: 40, left: 200 }}
        align="justify"
        colors={{ scheme: "category10" }}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={18}
        nodeSpacing={10}
        nodeBorderWidth={0}
        nodeBorderColor={{
          from: "color",
          modifiers: [["darker", 0.8]],
        }}
        nodeBorderRadius={3}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        linkContract={3}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="horizontal"
        labelPadding={2}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1]],
        }}
        valueFormat={() => ""}
        onClick={console.log}
      />
    </>
  );
};

export default AdvisingEntities;
