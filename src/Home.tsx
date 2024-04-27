import { ResponsiveSankey } from "@nivo/sankey";
import Heading from "./components/Heading";
import { Link, Node } from "./charts/students/AdvisingEntities";
import { Grid } from "@mui/material";
import { links, nodes } from "./data/home/allSankey";
import BubbleChartNivo from "./charts/BubbleChartNivo";
import { advisinglandscape } from "./data/home/advising";
import { CircularPacking } from "./charts/CirclePacking";

const Home = () => {
  return (
    <>
      <section>
        <Heading text={"Visualizing the Advising Landscape at Grinnell"} />
        <Grid item xs={12} className="grid-container sankey-concon">
          <Grid item xs={12} className="grid-container no-outline sankey-con">
            <HomeSankey data={{ nodes: nodes, links: links }} />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          className="grid-container sankey-concon"
          style={{ height: 600 }}
        >
          <Grid item xs={12} className="grid-container no-outline sankey-con">
            <h2 className="title">{"Advising Landscape at Grinnell"}</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularPacking
                data={advisinglandscape}
                width={1000}
                height={600}
              />
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Home;

type Data = {
  nodes: Node[];
  links: Link[];
};

type HomeSankeyProps = {
  data: Data;
};

const HomeSankey = ({ data }: HomeSankeyProps) => {
  data.nodes = data.nodes.filter(
    (node: any, index: number, self: any) =>
      index === self.findIndex((n: any) => n.id === node.id)
  );

  return (
    <>
      <h2 className="title">Advising Highlights</h2>
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
