import React from "react";

import Home from "./Home";
import StudentsPage from "./Students";
import FacultyPage from "./Faculty";
import StaffPage from "./Staff";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import SummaryPage from "./Summary";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="faculty" element={<FacultyPage />} />
        <Route path="staff" element={<StaffPage />} />
        <Route path="advisor-summary" element={<SummaryPage />} />
      </Routes>
      <p className="footer">
        Made by Avaash Bhattarai '26 and Jiahao Deng
      </p>
    </BrowserRouter>
  );
};

export default App;
