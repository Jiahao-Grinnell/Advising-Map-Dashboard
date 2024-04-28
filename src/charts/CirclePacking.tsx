import * as d3 from "d3";
import { Tree } from "../data/home/advising";

type CircularPackingProps = {
  width: number;
  height: number;
  data: Tree;
  setHoveredNode: (k: string) => void;
};
export const CircularPacking = ({
  width,
  height,
  data,
  setHoveredNode,
}: CircularPackingProps) => {
  const hierarchy = d3
    .hierarchy(data)
    .sum((d) => d.value)
    .sort((a, b) => b.value! - a.value!);
  const packGenerator = d3
    .pack<Tree>()
    .size([width / 1.75, height])
    .padding(10);
  const root = packGenerator(hierarchy);

  return (
    <svg
      width={width / 0.7}
      height={height}
      style={{ display: "inline-block" }}
    >
      {" "}
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <circle
            key={node.data.name}
            cx={node.x * 1.75 - 50}
            cy={node.y}
            r={node.r}
            stroke="#553C9A"
            strokeWidth={2}
            fill="#B794F4"
            fillOpacity={0.2}
            onMouseEnter={() => setHoveredNode(node.data.name)}
            // onMouseLeave={() => setHoveredNode("")}
          />
        ))}{" "}
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <text
            key={node.data.name}
            x={node.x * 1.75 - 50}
            y={node.y}
            fontSize={13}
            fontWeight={0.4}
            textAnchor="middle"
            alignmentBaseline="middle"
            onMouseEnter={() => setHoveredNode(node.data.name)}
          >
            {" "}
            {node.data.name}{" "}
          </text>
        ))}
    </svg>
  );
};
