export type TreeNode = {
  type: "node";
  value: number;
  name: string;
  children: Tree[];
};
export type TreeLeaf = {
  type: "leaf";
  name: string;
  value: number;
};

export type Tree = TreeNode | TreeLeaf;

export const advisinglandscape: Tree = {
  type: "node",
  name: "Advising",
  value: 370,
  children: [
    { name: "Academic Advising", value: 10, type: "leaf" },
    { name: "Academic Department Leadership", value: 6, type: "leaf" },
    { name: "Academic Resources", value: 6, type: "leaf" },
    { name: "Accessibility and Disability Resources", value: 1, type: "leaf" },
    { name: "Admissions", value: 1, type: "leaf" },
    { name: "Board of Trustees", value: 1, type: "leaf" },
    { name: "CLS", value: 19, type: "leaf" },
    { name: "CLS: Exploratory Advisor", value: 9, type: "leaf" },
    { name: "CLS: Grant Advisor", value: 4, type: "leaf" },
    { name: "CLS: Pre-Professional Advising", value: 21, type: "leaf" },
    { name: "Coaches and PEAR Staff", value: 4, type: "leaf" },
    { name: "Course Instructors & Faculty Mentors", value: 46, type: "leaf" },
    { name: "CRSSJ", value: 5, type: "leaf" },
    { name: "Faculty Advisor", value: 93, type: "leaf" },
    { name: "Family", value: 18, type: "leaf" },
    { name: "Financial Aid", value: 2, type: "leaf" },
    { name: "Healthcare Professionals", value: 3, type: "leaf" },
    { name: "Identity Groups", value: 2, type: "leaf" },
    { name: "IGE", value: 6, type: "leaf" },
    {
      name: "Office of Diversity, Equity, and Inclusion",
      value: 2,
      type: "leaf",
    },
    { name: "OISA", value: 9, type: "leaf" },
    { name: "Omsbuds", value: 1, type: "leaf" },
    { name: "Online Resources", value: 31, type: "leaf" },
    { name: "Student Leaders", value: 6, type: "leaf" },
    { name: "Students, Alumni, & Friends", value: 60, type: "leaf" },
    { name: "Supervisors", value: 4, type: "leaf" },
  ],
};
