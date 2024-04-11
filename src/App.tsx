import React from "react";

import Home from "./Home";
import StudentsPage from "./Students";
import FacultyPage from "./Faculty";
import StaffPage from "./Staff";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Toolbar from "./components/Toolbar";

const useStyles = makeStyles((theme: any) => ({
  graphContainer: {
    width: "100%",
    height: "100%",
    padding: 2,
    boxSizing: "border-box",
  },
}));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="faculty" element={<FacultyPage />} />
        <Route path="staff" element={<StaffPage />} />
      </Routes>
      <p className="footer">
        Made by Avaash Bhattarai '26 and Jiahao Deng for DASIL
      </p>
    </BrowserRouter>
  );
};

export default App;
