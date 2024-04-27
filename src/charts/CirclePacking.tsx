import * as d3 from "d3";
import { Tree } from "../data/home/advising";
import { useState } from "react";

type CircularPackingProps = { width: number; height: number; data: Tree };
export const CircularPacking = ({
  width,
  height,
  data,
}: CircularPackingProps) => {
  const hierarchy = d3
    .hierarchy(data)
    .sum((d) => d.value)
    .sort((a, b) => b.value! - a.value!);
  const packGenerator = d3.pack<Tree>().size([width, height]).padding(10);
  const root = packGenerator(hierarchy);

  const [hoveredNode, setHoveredNode] = useState<Tree | null>(null);
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  return (
    <svg
      width={width}
      height={height}
      style={{ display: "inline-block" }}
      onMouseMove={(event) => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }}
    >
      {" "}
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <circle
            key={node.data.name}
            cx={node.x * 1.75 - 500}
            cy={node.y}
            r={node.r}
            stroke="#553C9A"
            strokeWidth={2}
            fill="#B794F4"
            fillOpacity={0.2}
            onMouseEnter={() => setHoveredNode(node.data)}
            onMouseLeave={() => setHoveredNode(null)}
          />
        ))}{" "}
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <text
            key={node.data.name}
            x={node.x * 1.75 - 500}
            y={node.y}
            fontSize={13}
            fontWeight={0.4}
            textAnchor="middle"
            alignmentBaseline="middle"
            onMouseEnter={() => setHoveredNode(node.data)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {" "}
            {node.data.name}{" "}
          </text>
        ))}
      {hoveredNode && mousePosition && (
        <g transform={`translate(${mousePosition.x}, ${mousePosition.y})`}>
          <rect
            x={-260 + hoveredNode.name.length * 8}
            y={-130}
            width={hoveredNode.name.length * 8 + 20}
            height={20}
            fill="white"
            stroke="black"
            strokeWidth={1}
          />
          <text
            x={-252 + hoveredNode.name.length * 12.5}
            y={-115}
            fontSize={12}
            textAnchor="middle"
          >
            {hoveredNode.name}
          </text>
        </g>
      )}
    </svg>
  );
};
