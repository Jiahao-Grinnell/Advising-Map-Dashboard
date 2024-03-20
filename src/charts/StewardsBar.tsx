import { ResponsiveBar } from "@nivo/bar";

interface DataItem {
  label: string;
  value: number;
}

const StewardsBar = () => {
  const data = [
    { label: "CLS", value: 18.6 },
    { label: "Dean's Office", value: 15.3 },
    { label: "Joyce's Office/Academic Advising", value: 13.6 },
    { label: "Registrar", value: 13.6 },
    {
      label:
        "Tutorial Program (?)/Tutorial Advising/Tutorial Advising Committee/Worshops for Tutorial Training",
      value: 8.5,
    },
    { label: "Still figuring it out/Not clear/Unsure", value: 6.8 },
    { label: "CTLA", value: 5.1 },
    { label: "Student Affairs(?)", value: 5.1 },
    { label: "Faculty", value: 3.4 },
    { label: "IGE", value: 3.4 },
    { label: "Joyce", value: 3.4 },
    { label: "Wilson Center", value: 3.4 },
  ];

  return (
    <>
      <h2 className="title">Stewards</h2>
      <ResponsiveBar
        data={data}
        indexBy="label"
        padding={0}
        enableGridX={false}
        enableGridY={false}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        label={({ value }) => `${value!.toFixed(1)}%`}
        labelSkipWidth={1}
        labelSkipHeight={1}
        tooltip={TooltipComponent}
      />
    </>
  );
};

const TooltipComponent = ({ value, label }: DataItem) => (
  <div style={{ backgroundColor: "#333", padding: "8px" }}>
    <strong style={{ color: "#fff" }}>
      {label.substring(7, label.length)}: {value}%
    </strong>
  </div>
);

export default StewardsBar;
