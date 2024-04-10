import React from "react";

import Home from "./Home";
import StudentsPage from "./Students";
import FacultyPage from "./Faculty";
import StaffPage from "./Staff";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  graphContainer: {
    width: "100%",
    height: "100%",
    padding: 2,
    boxSizing: "border-box",
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="students"
          element={
            <section className={classes.graphContainer}>
              <StudentsPage />
            </section>
          }
        />
        <Route
          path="faculty"
          element={
            <section className={classes.graphContainer}>
              <FacultyPage />
            </section>
          }
        />
        <Route
          path="staff"
          element={
            <section className={classes.graphContainer}>
              <StaffPage />
            </section>
          }
        />
      </Routes>
      <p className="footer">
        Made by Avaash Bhattarai '26 and Jiahao Deng for DASIL
      </p>
    </BrowserRouter>
  );

  // const classes = useStyles();
  // return (
  //   <section>
  //     <Heading text={"Grinnell College Advising Data"} />
  //     <section className={classes.graphContainer}>
  //       <Dashboard />
  //     </section>
  //   </section>
  // );
};

export default App;
