import { ResponsiveCirclePacking } from "@nivo/circle-packing";

const BubbleChartNivo = ({ title, data, sp = false }) => {
  const TooltipComponent = (datum) => (
    <div style={{ backgroundColor: "#333", padding: "8px" }}>
      <strong style={{ color: "white" }}>
        {datum.id === "Others" ? datum.path[1] : datum.id}
        {/* : {datum.value}% */}
      </strong>
    </div>
  );

  const getColor = (node) => {
    // You can use node.id, node.value, or other properties to determine color
    // For example, return different colors based on node.id
    if (node.id === "Others") {
      return "transparent";
    } else if (node.depth === 1) {
      return "#7fc97f";
    } else if (node.depth === 2) {
      return "#386cb0";
    } else if (node.depth === 3) {
      return "#f0027f";
    } else {
      return "transparent"; // Default color
    }
  };

  return (
    <>
      <h2 className="title">{title}</h2>
      <ResponsiveCirclePacking
        data={data}
        margin={{
          top: sp ? -20 : 40,
          right: sp ? -20 : 115,
          bottom: sp ? -20 : 40,
          left: sp ? -20 : 115,
        }}
        id="name"
        value="value"
        inheritColorFromParent={sp}
        colors={sp ? "rgba(0, 0, 0, 0)" : getColor}
        childColor={
          sp
            ? "green"
            : {
                from: "color",
                modifiers: [["brighter", 0.4]],
              }
        }
        padding={sp ? 20 : 40}
        enableLabels={true}
        labelsFilter={(n) => (sp ? 2 : 1) === n.node.depth}
        labelsSkipRadius={0}
        labelTextColor={
          sp
            ? "black"
            : {
                from: "color",
                modifiers: [["darker", 2]],
              }
        }
        borderWidth={1}
        borderColor={
          sp
            ? {
                from: "color",
                modifiers: [["darker", 0.5]],
              }
            : getColor
        }
        tooltip={TooltipComponent}
      />
    </>
  );
};

export default BubbleChartNivo;
