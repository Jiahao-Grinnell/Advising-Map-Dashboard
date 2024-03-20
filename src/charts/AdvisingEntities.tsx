import { ResponsivePie } from "@nivo/pie";

const AdvisingEntities = () => {
  const data = [
    { id: "Academic Advising", label: "Academic Advising", value: 13.6 },
    { id: "Academic Centers", label: "Academic Centers", value: 4.1 },
    {
      id: "Academic Department Leadership",
      label: "Academic Department Leadership",
      value: 3.3,
    },
    { id: "Academic Resources", label: "Academic Resources", value: 1.2 },
    {
      id: "Accessibility\nand\nDisability\nResources",
      label: "Accessibility\nand\nDisability\nResources",
      value: 3.3,
    },
    { id: "Accommodations", label: "Accommodations", value: 0.8 },
    { id: "Alumni", label: "Alumni", value: 0.8 },
    { id: "CLS", label: "CLS", value: 10.7 },
    { id: "CRSSJ", label: "CRSSJ", value: 0.4 },
    { id: "College Resources", label: "College Resources", value: 3.7 },
    { id: "Faculty Resources", label: "Faculty Resources", value: 0.8 },
    { id: "Faculty Workshps", label: "Faculty Workshps", value: 1.2 },
    {
      id: "Friends and Colleagues",
      label: "Friends and Colleagues",
      value: 16.9,
    },
    { id: "GSP", label: "GSP", value: 0.4 },
    { id: "Higher Administration", label: "Higher Administration", value: 0.8 },
    { id: "ICPSR", label: "ICPSR", value: 0.4 },
    { id: "IGE", label: "IGE", value: 4.5 },
    { id: "ISO", label: "ISO", value: 0.4 },
    { id: "Library", label: "Library", value: 2.9 },
    { id: "MPI", label: "MPI", value: 0.4 },
    { id: "Myself", label: "Myself", value: 1.2 },
    { id: "ODEI", label: "ODEI", value: 0.4 },
    { id: "OISA", label: "OISA", value: 1.2 },
    { id: "Online Resources", label: "Online Resources", value: 7.8 },
    {
      id: "Professional Resources",
      label: "Professional Resources",
      value: 0.4,
    },
    { id: "RLC", label: "RLC", value: 0.8 },
    { id: "Registrar's Office", label: "Registrar's Office", value: 11.9 },
    { id: "SHAW", label: "SHAW", value: 2.5 },
    { id: "Student Resources", label: "Student Resources", value: 2.9 },
  ];

  const TooltipComponent = ({ datum }: any) => (
    <div style={{ backgroundColor: "#333", padding: "8px" }}>
      <strong style={{ color: "white" }}>
        {datum.label}: {datum.value}%
      </strong>
    </div>
  );

  return (
    <>
      <h2 className="title">Advising Entities</h2>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 115, bottom: 80, left: 115 }}
        // sortByValue={true}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "accent" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsStraightLength={10}
        arcLinkLabelsDiagonalLength={10}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsThickness={3}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={20}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        tooltip={TooltipComponent}
        motionConfig={"wobbly"}
      />
    </>
  );
};

export default AdvisingEntities;
