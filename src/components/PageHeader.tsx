import { ReactNode } from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";

export type PageHeaderProps = {
  title: ReactNode;
  subtitle?: ReactNode;
};

const PageHeader = (props: PageHeaderProps) => {
  const { title, subtitle } = props;

  return (
    <Grid item xs={12}>
      {title}
      {subtitle || null}
    </Grid>
  );
};

export default PageHeader;
