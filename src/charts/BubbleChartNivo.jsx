import { ResponsiveCirclePacking } from "@nivo/circle-packing";

const BubbleChartNivo = ({ title, data, sp = false }) => {
  const TooltipComponent = (datum) => (
    <div style={{ backgroundColor: "#333", padding: "8px" }}>
      <strong style={{ color: "white" }}>
        {datum.id}
        {/* : {datum.value}% */}
      </strong>
    </div>
  );

  return (
    <>
      <h2 className="title">{title}</h2>
      <ResponsiveCirclePacking
        data={data}
        margin={{
          top: sp ? -20 : 40,
          right: sp ? -15 : 115,
          bottom: sp ? -20 : 80,
          left: sp ? -15 : 115,
        }}
        id="name"
        value="value"
        inheritColorFromParent={sp}
        colors={sp ? "rgba(0, 0, 0, 0)" : { scheme: "accent" }}
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
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.5]],
        }}
        tooltip={TooltipComponent}
      />
    </>
  );
};

export default BubbleChartNivo;
