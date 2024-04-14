export const stewardsPie = [
  { label: "CLS", value: 5, id: "CLS" },
  { label: "Financial Aid/Services", value: 3, id: "Financial Aid/Services" },
  { label: "Wilson/Rosenfield", value: 3, id: "Wilson/Rosenfield" },
  { label: "Wilson/Rosenfield", value: 3, id: "Wilson/Rosenfield" },
  { label: "Faculty", value: 3, id: "Faculty" },
  { label: "Registrar's Office", value: 3, id: "Registrar's Office" },
  {
    label: "Academic Advising Office",
    value: 2,
    id: "Academic Advising Office",
  },
  { label: "DAR", value: 2, id: "DAR" },
  { label: "DSA", value: 2, id: "DSA" },
  { label: "OISA", value: 2, id: "OISA" },
  { label: "Unsure", value: 2, id: "Unsure" },
  { label: "Mark Peltz", value: 2, id: "Mark Peltz" },
  { label: "CTLA", value: 1, id: "CTLA" },
  { label: "Senior Leadership", value: 1, id: "Senior Leadership" },
  { label: "FM", value: 1, id: "FM" },
  { label: "ODEI", value: 1, id: "ODEI" },
  { label: "CEL Faculty", value: 1, id: "CEL Faculty" },
  { label: "Libraries", value: 1, id: "Libraries" },
  { label: "Academic Departments", value: 1, id: "Academic Departments" },
  { label: "Center of Humanities", value: 1, id: "Center of Humanities" },
  { label: "Kelly Harris", value: 1, id: "Kelly Harris" },
  { label: "CRSSJ", value: 1, id: "CRSSJ" },
  { label: "SHAW", value: 1, id: "SHAW" },
  { label: "Academic Advisers", value: 1, id: "Academic Advisers" },
  { label: "Global Learning", value: 1, id: "Global Learning" },
  { label: "Board of Trustees", value: 1, id: "Board of Trustees" },
  {
    label: "Tutorial and Advising Committee",
    value: 1,
    id: "Tutorial and Advising Committee",
  },
];

export const stewardsBubble = {
  name: "Stewards",
  children: [
    {
      name: "Academic Advising",
      children: [{ name: "Academic Advising Office", value: 2 }],
    },
    {
      name: "Academic Departments",
      children: [{ name: "Academic Departments", value: 1 }],
    },
    {
      name: "Academic Resources",
      children: [{ name: "Global Learning", value: 1 }],
    },
    {
      name: "Board of Trustees",
      children: [{ name: "Board of Trustees", value: 1 }],
    },
    {
      name: "CLS",
      children: [
        { name: "CLS", value: 5 },
        { name: "Kelly Harris", value: 1 },
        { name: "Mark Peltz", value: 2 },
      ],
    },
    { name: "CRSSJ", children: [{ name: "CRSSJ", value: 1 }] },
    { name: "CTLA", children: [{ name: "CTLA", value: 1 }] },
    { name: "DAR", children: [{ name: "DAR", value: 2 }] },
    { name: "DSA", children: [{ name: "DSA", value: 2 }] },
    {
      name: "Dean's Office",
      children: [
        { name: "Dean's Office", value: 5 },
        { name: "Tutorial and Advising Committee", value: 1 },
      ],
    },
    { name: "Facilities Management", children: [{ name: "FM", value: 1 }] },
    {
      name: "Faculty/Coaches",
      children: [
        { name: "Academic Advisers", value: 1 },
        { name: "CEL Faculty", value: 1 },
        { name: "Faculty", value: 3 },
      ],
    },
    {
      name: "Financial Aid",
      children: [{ name: "Financial Aid/Services", value: 3 }],
    },
    {
      name: "Humanities and Social Sciences Center",
      children: [{ name: "Center of Humanities", value: 1 }],
    },
    { name: "Library", children: [{ name: "Libraries", value: 1 }] },
    { name: "ODEI", children: [{ name: "ODEI", value: 1 }] },
    { name: "OISA", children: [{ name: "OISA", value: 2 }] },
    {
      name: "Registrar's Office",
      children: [{ name: "Registrar's Office", value: 3 }],
    },
    {
      name: "Rosenfield Program",
      children: [{ name: "Wilson/Rosenfield", value: 3 }],
    },
    { name: "SHAW", children: [{ name: "SHAW", value: 1 }] },
    {
      name: "Senior Leadership",
      children: [{ name: "Senior Leadership", value: 1 }],
    },
    { name: "Uncertain", children: [{ name: "Unsure", value: 2 }] },
    {
      name: "Wilson Program",
      children: [{ name: "Wilson/Rosenfield", value: 3 }],
    },
  ],
};
