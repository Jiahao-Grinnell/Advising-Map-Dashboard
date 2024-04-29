export const stewardsPie = [
  { label: "Academic Advising", value: 2, id: "Academic Advising" },
  { label: "Academic Departments", value: 1, id: "Academic Departments" },
  { label: "Academic Resources", value: 1, id: "Academic Resources" },
  { label: "Board of Trustees", value: 1, id: "Board of Trustees" },
  { label: "CLS", value: 8, id: "CLS" },
  { label: "CRSSJ", value: 1, id: "CRSSJ" },
  { label: "CTLA", value: 1, id: "CTLA" },
  { label: "DAR", value: 2, id: "DAR" },
  { label: "DSA", value: 2, id: "DSA" },
  { label: "Dean's Office", value: 6, id: "Dean's Office" },
  { label: "Facilities Management", value: 1, id: "Facilities Management" },
  { label: "Faculty/Coaches", value: 5, id: "Faculty/Coaches" },
  { label: "Financial Aid", value: 3, id: "Financial Aid" },
  {
    label: "Humanities and Social Sciences Center",
    value: 1,
    id: "Humanities and Social Sciences Center",
  },
  { label: "Library", value: 1, id: "Library" },
  { label: "ODEI", value: 1, id: "ODEI" },
  { label: "OISA", value: 2, id: "OISA" },
  { label: "Registrar's Office", value: 3, id: "Registrar's Office" },
  { label: "Rosenfield Program", value: 3, id: "Rosenfield Program" },
  { label: "SHAW", value: 1, id: "SHAW" },
  { label: "Senior Leadership", value: 1, id: "Senior Leadership" },
  { label: "Uncertain", value: 2, id: "Uncertain" },
  { label: "Wilson Program", value: 3, id: "Wilson Program" },
];

export const stewardsBubble = {
  name: "Stewards",
  children: [
    { name: "Academic\nAdvising", children: [{ name: "Others", value: 2 }] },
    { name: "Academic\nDepartments", children: [{ name: "Others", value: 1 }] },
    { name: "Academic\nResources", children: [{ name: "Others", value: 1 }] },
    { name: "Board of\nTrustees", children: [{ name: "Others", value: 1 }] },
    {
      name: "CLS",
      children: [
        //{ name: "Kelly Harris", value: 1 },
        //{ name: "Mark Peltz", value: 2 },
        { name: "Others", value: 8 },
      ],
    },
    { name: "CRSSJ", children: [{ name: "Others", value: 1 }] },
    { name: "CTLA", children: [{ name: "Others", value: 1 }] },
    { name: "DAR", children: [{ name: "Others", value: 2 }] },
    { name: "DSA", children: [{ name: "Others", value: 2 }] },
    {
      name: "Dean's Office",
      children: [
        { name: "Others", value: 6 },
        //{ name: "Tutorial and Advising Committee", value: 1 },
      ],
    },
    {
      name: "Facilities\nManagement",
      children: [{ name: "Others", value: 1 }],
    },
    { name: "Faculty/Coaches", children: [{ name: "Others", value: 5 }] },
    { name: "Financial Aid", children: [{ name: "Others", value: 3 }] },
    {
      name: "Humanities\nand Social\nSciences Center",
      children: [{ name: "Others", value: 1 }],
    },
    { name: "Library", children: [{ name: "Others", value: 1 }] },
    { name: "ODEI", children: [{ name: "Others", value: 1 }] },
    { name: "OISA", children: [{ name: "Others", value: 2 }] },
    { name: "Registrar's Office", children: [{ name: "Others", value: 3 }] },
    { name: "Rosenfield Program", children: [{ name: "Others", value: 3 }] },
    { name: "SHAW", children: [{ name: "Others", value: 1 }] },
    { name: "Senior\nLeadership", children: [{ name: "Others", value: 1 }] },
    { name: "Uncertain", children: [{ name: "Others", value: 2 }] },
    { name: "Wilson Program", children: [{ name: "Others", value: 3 }] },
  ],
};
