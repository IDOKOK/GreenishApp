import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Dialog, DialogTitle, DialogContent, IconButton, Box } from '@material-ui/core';
import CloseIcon from "@mui/icons-material/Close";
import useStyles from './Modal.styles';


const Modal = ({ openDialog, handleCloseDialog, children, title }) => {
    const theme = useTheme();
    const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
        <IconButton className={classes.icon}onClick={handleCloseDialog}>
          <CloseIcon  />
        </IconButton>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </Box>
  );
};

export default Modal;
