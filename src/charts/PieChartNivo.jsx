import { ResponsivePie } from "@nivo/pie";

const PieChartNivo = ({ title, data, onClick = (_) => {} }) => {
  const TooltipComponent = ({ datum }) => (
    <div style={{ backgroundColor: "#333", padding: "8px" }}>
      <strong style={{ color: "white" }}>
        {datum.label}
        {/* : {datum.value}% */}
      </strong>
    </div>
  );

  return (
    <>
      <h2 className="title">{title}</h2>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 115, bottom: 80, left: 115 }}
        sortByValue={true}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "accent" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLabels={false}
        arcLinkLabelsStraightLength={10}
        arcLinkLabelsDiagonalLength={10}
        arcLinkLabelsSkipAngle={14}
        arcLinkLabelsTextColor="#000"
        arcLinkLabelsThickness={3}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={20}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        tooltip={TooltipComponent}
        motionConfig={"wobbly"}
        onClick={({ id }) => onClick(id)}
      />
    </>
  );
};

export default PieChartNivo;
