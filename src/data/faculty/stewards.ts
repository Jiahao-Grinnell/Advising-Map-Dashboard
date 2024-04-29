export const stewardsPie = [
  { label: "Academic Advising", value: 12, id: "Academic Advising" },
  {
    label: "Academic Resource Centers",
    value: 1,
    id: "Academic Resource Centers",
  },
  { label: "Board of Trustees", value: 1, id: "Board of Trustees" },
  { label: "Budget Committee", value: 1, id: "Budget Committee" },
  { label: "CLS", value: 11, id: "CLS" },
  { label: "CTLA", value: 3, id: "CTLA" },
  { label: "Center for Humanities", value: 1, id: "Center for Humanities" },
  { label: "Dean's Office", value: 11, id: "Dean's Office" },
  { label: "Executive Council", value: 1, id: "Executive Council" },
  { label: "Faculty Workshops", value: 1, id: "Faculty Workshops" },
  { label: "Faculty/Coaches", value: 2, id: "Faculty/Coaches" },
  {
    label: "Grinnell Science Project",
    value: 1,
    id: "Grinnell Science Project",
  },
  { label: "IGE", value: 2, id: "IGE" },
  {
    label: "Institute for Global Engagement",
    value: 1,
    id: "Institute for Global Engagement",
  },
  {
    label: "Instructional Support Committee",
    value: 1,
    id: "Instructional Support Committee",
  },
  { label: "MAP Program", value: 1, id: "MAP Program" },
  { label: "OISA", value: 1, id: "OISA" },
  { label: "Registrar's Office", value: 10, id: "Registrar's Office" },
  { label: "Science Learning Center", value: 1, id: "Science Learning Center" },
  { label: "Student Affairs", value: 4, id: "Student Affairs" },
  { label: "The President's Office", value: 1, id: "The President's Office" },
  {
    label: "Tutorial and Advising Committee",
    value: 5,
    id: "Tutorial and Advising Committee",
  },
  { label: "Uncertain", value: 6, id: "Uncertain" },
  { label: "Wilson Center", value: 2, id: "Wilson Center" },
];

export const stewardsBubble = {
  name: "Stewards",
  children: [
    {
      name: "Academic Advising",
      children: [
        //{ name: "Belinda Backous", value: 1 },
        //{ name: "Kate Ferraro", value: 1 },
        { name: "Others", value: 12 },
      ],
    },
    {
      name: "Academic\nResource\nCenters",
      children: [{ name: "Others", value: 1 }],
    },
    { name: "Board of\nrustees", children: [{ name: "Others", value: 1 }] },
    { name: "Budget\nCommittee", children: [{ name: "Others", value: 1 }] },
    { name: "CLS", children: [{ name: "Others", value: 11 }] },
    { name: "CTLA", children: [{ name: "Others", value: 3 }] },
    {
      name: "Center for\nHumanities",
      children: [{ name: "Others", value: 1 }],
    },
    {
      name: "Dean's Office",
      children: [
        { name: "Others", value: 11 },
        //{ name: "Tim Arner", value: 1 },
      ],
    },
    { name: "Executive\nCouncil", children: [{ name: "Others", value: 1 }] },
    { name: "Faculty\nWorkshops", children: [{ name: "Others", value: 1 }] },
    { name: "Faculty/Coaches", children: [{ name: "Others", value: 2 }] },
    {
      name: "Grinnell\nScience\nProject",
      children: [{ name: "Others", value: 1 }],
    },
    { name: "IGE", children: [{ name: "Others", value: 2 }] },
    {
      name: "Institute\nfor Global\nEngagement",
      children: [{ name: "Others", value: 1 }],
    },
    {
      name: "Instructional\nSupport\nCommittee",
      children: [{ name: "Others", value: 1 }],
    },
    { name: "MAP Program", children: [{ name: "Others", value: 1 }] },
    { name: "OISA", children: [{ name: "Others", value: 1 }] },
    {
      name: "Registrar's Office",
      children: [
        { name: "Others", value: 10 },
        // { name: "Tammy Whitney", value: 1 },
        // { name: "Vickie Rutherford", value: 1 },
      ],
    },
    {
      name: "Science\nLearning\nCenter",
      children: [{ name: "Others", value: 1 }],
    },
    {
      name: "Student Affairs",
      children: [
        //{ name: "NSO Organizers", value: 1 },
        { name: "Others", value: 4 },
      ],
    },
    {
      name: "The\nPresident's\nOffice",
      children: [{ name: "Others", value: 1 }],
    },
    {
      name: "Tutorial\nand Advising\nCommittee",
      children: [{ name: "Others", value: 5 }],
    },
    { name: "Uncertain", children: [{ name: "Others", value: 6 }] },
    { name: "Wilson Center", children: [{ name: "Others", value: 2 }] },
  ],
};
