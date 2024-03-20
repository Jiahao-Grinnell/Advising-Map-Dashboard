import React from "react";

import Dashboard from "./components/Dashboard";
import Heading from "./components/Heading";

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
    <section>
      <Heading text={"Grinnell College Advising Data"} />
      <section className={classes.graphContainer}>
        <Dashboard />
      </section>
    </section>
  );
};

export default App;
