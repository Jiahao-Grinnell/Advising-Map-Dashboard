export const stewardsPie = [
  { label: "CLS", value: 11, id: "CLS" },
  { label: "Dean's Office", value: 9, id: "Dean's Office" },
  {
    label: "Joyce's Office/Academic Advising",
    value: 8,
    id: "Joyce's Office/Academic Advising",
  },
  { label: "Registrar", value: 8, id: "Registrar" },
  {
    label:
      "Tutorial Program (?)/Tutorial Advising/Tutorial Advising Committee/Worshops for Tutorial Training",
    value: 5,
    id: "Tutorial Program (?)/Tutorial Advising/Tutorial Advising Committee/Worshops for Tutorial Training",
  },
  {
    label: "Still figuring it out/Not clear/Unsure",
    value: 4,
    id: "Still figuring it out/Not clear/Unsure",
  },
  { label: "Student Affairs(?)", value: 3, id: "Student Affairs(?)" },
  { label: "CTLA", value: 3, id: "CTLA" },
  { label: "IGE", value: 2, id: "IGE" },
  { label: "Faculty", value: 2, id: "Faculty" },
  { label: "Wilson Center", value: 2, id: "Wilson Center" },
  { label: "Joyce", value: 2, id: "Joyce" },
  {
    label: "The Endowment + Trustees(?)",
    value: 1,
    id: "The Endowment + Trustees(?)",
  },
  { label: "Widely Distributed", value: 1, id: "Widely Distributed" },
  { label: "MAP Program(?)", value: 1, id: "MAP Program(?)" },
  { label: "Tim Arner", value: 1, id: "Tim Arner" },
  { label: "OISA", value: 1, id: "OISA" },
  {
    label: "Institution for Global Engagement",
    value: 1,
    id: "Institution for Global Engagement",
  },
  { label: "Humanities Center", value: 1, id: "Humanities Center" },
  { label: "Associate Deans", value: 1, id: "Associate Deans" },
  { label: "Science Learning Center", value: 1, id: "Science Learning Center" },
  { label: "Executive Council", value: 1, id: "Executive Council" },
  {
    label: "There are money or other resources to support advising?",
    value: 1,
    id: "There are money or other resources to support advising?",
  },
  {
    label: "Instructional Support Committee",
    value: 1,
    id: "Instructional Support Committee",
  },
  {
    label: "$ for Leadership Workshop Attend",
    value: 1,
    id: "$ for Leadership Workshop Attend",
  },
  { label: "Belinda", value: 1, id: "Belinda" },
  { label: "Kate", value: 1, id: "Kate" },
  { label: "The President", value: 1, id: "The President" },
  { label: "Tammy Whitney", value: 1, id: "Tammy Whitney" },
  { label: "Vickie Rutherford", value: 1, id: "Vickie Rutherford" },
  {
    label: "People who hire tutors, SCL's, and other student staff.",
    value: 1,
    id: "People who hire tutors, SCL's, and other student staff.",
  },
  {
    label:
      "Budgetary decisions on granting new positions in Academic Advising etc",
    value: 1,
    id: "Budgetary decisions on granting new positions in Academic Advising etc",
  },
  { label: "NSO organizers", value: 1, id: "NSO organizers" },
  { label: "GSP organizers", value: 1, id: "GSP organizers" },
];

export const stewardsBubble = {
  name: "Stewards",
  children: [
    {
      name: "Academic Advising",
      children: [
        { name: "Belinda", value: 1 },
        { name: "Joyce", value: 2 },
        { name: "Joyce's Office/Academic Advising", value: 8 },
        { name: "Kate", value: 1 },
      ],
    },
    {
      name: "Academic Resource Centers",
      children: [
        {
          name: "People who hire tutors, SCL's, and other student staff.",
          value: 1,
        },
      ],
    },
    {
      name: "Board of Trustees",
      children: [{ name: "The Endowment + Trustees(?)", value: 1 }],
    },
    {
      name: "Budget Committee",
      children: [
        {
          name: "Budgetary decisions on granting new positions in Academic Advising etc",
          value: 1,
        },
      ],
    },
    { name: "CLS", children: [{ name: "CLS ", value: 11 }] },
    { name: "CTLA", children: [{ name: "CTLA ", value: 3 }] },
    {
      name: "Center for Humanities",
      children: [{ name: "Humanities Center", value: 1 }],
    },
    {
      name: "Dean's Office",
      children: [
        { name: "Associate Deans", value: 1 },
        { name: "Dean's Office ", value: 9 },
        { name: "Tim Arner", value: 1 },
      ],
    },
    {
      name: "Executive Council",
      children: [{ name: "Executive Council ", value: 1 }],
    },
    {
      name: "Faculty Workshops",
      children: [{ name: "$ for Leadership Workshop Attend", value: 1 }],
    },
    { name: "Faculty/Coaches", children: [{ name: "Faculty", value: 2 }] },
    {
      name: "Grinnell Science Project",
      children: [{ name: "GSP organizers", value: 1 }],
    },
    { name: "IGE", children: [{ name: "IGE ", value: 3 }] },
    {
      name: "Instructional Support Committee",
      children: [{ name: "Instructional Support Committee ", value: 1 }],
    },
    { name: "MAP Program", children: [{ name: "MAP Program(?)", value: 1 }] },
    { name: "OISA", children: [{ name: "OISA ", value: 1 }] },
    {
      name: "Registrar's Office",
      children: [
        { name: "Registrar", value: 8 },
        { name: "Tammy Whitney", value: 1 },
        { name: "Vickie Rutherford", value: 1 },
      ],
    },
    {
      name: "Science Learning Center",
      children: [{ name: "Science Learning Center ", value: 1 }],
    },
    {
      name: "Student Affairs",
      children: [
        { name: "NSO organizers", value: 1 },
        { name: "Student Affairs ", value: 3 },
      ],
    },
    {
      name: "The President's Office",
      children: [{ name: "The President", value: 1 }],
    },
    {
      name: "Tutorial and Advising Committee",
      children: [
        {
          name: "Tutorial Program (?)/Tutorial Advising/Tutorial Advising Committee/Worshops for Tutorial Training",
          value: 5,
        },
      ],
    },
    {
      name: "Uncertain",
      children: [
        { name: "Still figuring it out/Not clear/Unsure", value: 4 },
        {
          name: "There are money or other resources to support advising?",
          value: 1,
        },
        { name: "Widely Distributed", value: 1 },
      ],
    },
    { name: "Wilson Center", children: [{ name: "Wilson Center ", value: 2 }] },
  ],
};
