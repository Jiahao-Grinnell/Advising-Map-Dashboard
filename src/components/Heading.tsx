import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h1
      style={{
        fontSize: "21px",
        width: "100%",
        textAlign: "left",
      }}
    >
      {text}
    </h1>
  );
};

export default Heading;
