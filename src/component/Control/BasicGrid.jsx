import React from "react";
import { Grid, Box, } from "@material-ui/core";
import Index from '../Control/Index'; 
import useStyles from "./BasicGrid.styles";
import SendIcon from "@mui/icons-material/Send";
import MyImageList from '../Custom/MyImageList';
import ThumbPrint from './ThumbPrint';


/**
 * 
 * @reference {https://refine.dev/blog/material-ui-grid/} 
 * 
 */
const BasicGrid = () => {
    const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Setting up the Fluid Grid system */}
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Index.Typography
            text="Easy and Secured Online Election/Voting Excellence"
            variant="h4"
            classes={classes.typo1}
          />
          <Index.Typography
            text="Greenish ensures poll fairness, increases voter participation, and saves a ton of time. Its free for now, so
               don't miss the opportunity"
            variant="h6"
            classes={classes.typo2}
          />
          <Index.IconButton variant="outlined" icon={<SendIcon />} classes={classes.iconButton} />
          <ThumbPrint classes={classes.thumbPrint}/>
                
        </Grid>
        <Grid item xs={5}>
          <MyImageList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicGrid;
