import * as React from "react";
import IconButton from "@mui/material/IconButton";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Box } from "@mui/system";

 const Thumbprint = ({classes}) => {
    return (
      <Box>
        <IconButton
          aria-label="fingerprint"
          color="success"
          className={classes}
        >
          {/* <Fingerprint /> */}
          <FingerprintIcon style={{ fontSize: 80 }} />
        </IconButton>
      </Box>
    );
}

export default Thumbprint;