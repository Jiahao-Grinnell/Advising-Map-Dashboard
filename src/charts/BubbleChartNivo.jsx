import { ResponsiveCirclePacking } from "@nivo/circle-packing";

const BubbleChartNivo = ({ title, data }) => {
  return (
    <>
      <h2 className="title">{title}</h2>
      <ResponsiveCirclePacking
        data={data}
        margin={{ top: 40, right: 115, bottom: 80, left: 115 }}
        id="name"
        value="value"
        colors={{ scheme: "accent" }}
        childColor={{
          from: "color",
          modifiers: [["brighter", 0.4]],
        }}
        padding={50}
        enableLabels={true}
        labelsFilter={(n) => 1 === n.node.depth}
        labelsSkipRadius={0}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.5]],
        }}
      />
    </>
  );
};

export default BubbleChartNivo;
