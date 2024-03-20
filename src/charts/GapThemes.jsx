import React from "react";
import { ResponsivePie } from "@nivo/pie";

const GapThemes = ({ themes, setThemes }) => {
  const gthemes = {
    "Enhanced Academic and Registration Processes": {
      "Effective Course Registration and Engagement with Advisees/Overhaul of Registration Process": 4,
      "More Department-Specific Advice (e.g., Anthropology) from CLS": 2,
      "Equitable Distribution of Advisees": 2,
      "Communication between Faculty and Registrar's Office": 1,
    },

    "Adviser Support and Development": {
      "More Authority for Faculty and Other Advisers": 2,
      "More Formal Training for Faculty Advisers": 2,
      "Recognition and Compensation for Different Advising Roles": 1,
      "More Manageable Workload to Allow Space and Time for 1:1 Interactions": 1,
    },

    "Diversity and Inclusion Initiatives": {
      "Targeted Advice for International Students - New to Liberal Arts": 2,
      "Low Student Diversity in STEM": 1,
      "Faculty of Color, Especially Women of Color": 1,
      "More Access to MAPs, Independent Studies for Every Student Who Wants One - Particularly Domestic Students of Color": 1,
      "Resources for Students of Color": 1,
      "Support for Students Navigating Office Hours and Faculty Access": 1,
    },

    "Career and Alumni Resources": {
      "Alumni - Access and Records": 3,
      "Better Internship Advising": 1,
      "Updated Resources and Training for Post-Grinnell Advising (Grad-School, Career, Research, etc.)": 1,
    },

    "Communication and Engagement": {
      "Engaging More with Academic Advising": 1,
      "Communication between Students' Multiple Advisors": 1,
      "Advisees Served by Faculty Who Have Not Taught Tutorial": 1,
      "More for Non-Traditional Students": 1,
      "More FYE (First Year Experience)": 1,
    },

    "Specialized Student Support": {
      "Assist Students with Impairments and Mental Health Needs": 1,
      "More Support for Major Advising and Major Departments": 1,
      "More Help for Non-Native English Speakers": 1,
      "Support for Students Transitioning into 2nd Year": 1,
      "More Time": 1,
      "Greater Support for Students Interested in Pursuing Linguistics in Post-Grad Institutions": 1,
      "First-Gen New to Liberal Arts Goals": 1,
      "System to Identify First-Year Students Interested in Studio Art Major": 1,
      "More Formal Familiarization with Grinnell Culture": 1,
      "Faculty Are Not Having Difficult Conversations with Students about Broad Liberal Arts Curriculum": 1,
      "More Staffing in Academic Advising Office": 1,
      "Overburden of AAs (Especially in Bucksbaum)": 1,
    },

    "Additional Concerns": {
      "Service = Very Challenging": 1,
      "Academic Records Very Scattered": 1,
      "Cannot Think of Anything in Particular": 1,
      "More Support for Major Departments with Many Majors or Departments with Many Faculty Members Teaching Tutorial": 1,
    },
  };

  const data = [
    {
      id: "Enhanced Academic and Registration Processes",
      label: "Enhanced Academic and Registration Processes",
      value: 18.8,
    },
    {
      id: "Adviser Support and Development",
      label: "Adviser Support and Development",
      value: 12.5,
    },
    {
      id: "Diversity and Inclusion Initiatives",
      label: "Diversity and Inclusion Initiatives",
      value: 14.6,
    },
    {
      id: "Career and Alumni Resources",
      label: "Career and Alumni Resources",
      value: 10.4,
    },
    {
      id: "Communication and Engagement",
      label: "Communication and Engagement",
      value: 10.4,
    },
    {
      id: "Specialized Student Support",
      label: "Specialized Student Support",
      value: 25.0,
    },
    { id: "Additional Concerns", label: "Additional Concerns", value: 8.3 },
  ];

  const TooltipComponent = ({ datum }) => (
    <div style={{ backgroundColor: "#333", padding: "8px" }}>
      <strong style={{ color: "white" }}>
        {datum.label}: {datum.value}%
      </strong>
    </div>
  );

  const handleClick = ({ id }) => {
    let themeSelected = false;
    for (let i = 0; i < themes.length && !themeSelected; i++)
      themeSelected = id === themes[i]._id;

    console.log(id, themeSelected);

    if (themeSelected) {
      const newThemes = themes.filter((t) => t._id !== id);
      setThemes(newThemes);
    } else {
      const newThemes = [...themes, { _id: id, v: gthemes[id] }];
      setThemes(newThemes);
    }
  };

  return (
    <>
      <h2 className="title">Gap Themes Analysis</h2>
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
        onClick={handleClick}
      />
    </>
  );
};

export default GapThemes;
