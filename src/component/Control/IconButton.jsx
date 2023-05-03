import * as React from "react";
import {Button, Box } from "@mui/material";



const IconButton =({variant, icon, classes})=> {
    return (
      <Box>
        <Button variant={variant} endIcon={icon} className={classes}>
          See Active Elections
        </Button>
      </Box>
    );
}
export default IconButton;
