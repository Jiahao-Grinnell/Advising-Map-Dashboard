import { ResponsiveBar } from "@nivo/bar";

interface DataItem {
  label: string;
  value: number;
}

const ChampionsBar = () => {
  const data = [
    { label: "Joyce Stern", value: 14.2 },
    { label: "Academic Advising (Joyce's Office)", value: 10.0 },
    { label: "Faculty/Coaches", value: 6.7 },
    { label: "CLS", value: 6.7 },
    { label: "Belinda Backous", value: 5.8 },
    { label: "OCS", value: 3.3 },
    {
      label:
        "All my colleagues really!/My faculty colleagues./Colleagues in departments",
      value: 3.3,
    },
    { label: "Vickie Rutherford", value: 3.3 },
    { label: "Joyce + Office", value: 2.5 },
    { label: "Tammy Whitney", value: 2.5 },
    { label: "Registrar/Registrar's Office", value: 2.5 },
    { label: "Dean's Office", value: 2.5 },
    { label: "Karen Edwards/Karen Edwards + Office", value: 2.5 },
    { label: "Tim Arner", value: 1.7 },
    { label: "Minna Mahlab in Science Learning Center", value: 1.7 },
    { label: "Kate Ferraro", value: 1.7 },
    { label: "Karla Erickson, Chair", value: 1.7 },
    { label: "Tutorial Workshop Staff", value: 1.7 },
    { label: "Sarah Barks", value: 1.7 },
    { label: "Student Affairs", value: 1.7 },
    { label: "Catherine Ashton", value: 1.7 },
  ];

  return (
    <>
      <h2 className="title">Champions</h2>
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

export default ChampionsBar;
