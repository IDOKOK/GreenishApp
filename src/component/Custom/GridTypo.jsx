import React from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "./GridTypo.styles";
import Index from "../Control/Index";
import ThemeButton from "./ThemeButton";


/**
 *
 * @reference {https://refine.dev/blog/material-ui-grid/}
 *
 */
const GridTypo = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Setting up the Fluid Grid system */}
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Index.Typography
            text="Active Elections"
            variant="h3"
            classes={classes.root}
          />
        </Grid>
        <Grid item xs={5}>
          <ThemeButton />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridTypo;
