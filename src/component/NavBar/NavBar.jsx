import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { AppBar, Toolbar, Typography} from '@material-ui/core'; /** https://mui.com/material-ui/react-app-bar **/
import { NavLink } from "react-router-dom";
import StyledBreadcrumb from "./StyleBreadCrumb";
import Modal from '../Custom/Modal';
// import { useNavigate } from "react-router-dom";

// creating the Navigation bar
import useStyles from './Navbar.styles';
import SignUp from "../Pages/user/SignUp";
/** https://mui.com/material-ui/react-app-bar **/
/**
 * 
 * @reference https://mui.com/material-ui/react-breadcrumbs/
 */
const NavBar = ({name}) => {
  const classes = useStyles();
  // const navigate = useNavigate();    //onClick={() => navigate('signup')}  // this will navigate to signup page. but here we are not navigating
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Typography variant="h6">
          <NavLink
            style={navLinkStyles}
            className={classes.link}
            to="/terms and conditions"
          >
            Terms and Conditions
          </NavLink>
        </Typography>
        <Typography variant="h6">
          <NavLink className={classes.link} to="/contactus">
            Contact us
          </NavLink>
        </Typography>
        <Typography variant="h6">
          <NavLink className={classes.logo} to="/MainPage">
            Greenish
          </NavLink>
        </Typography>

        <Typography variant="h6">
          <NavLink
            style={navLinkStyles}
            className={classes.link}
            to="/activeelections"
          >
            Active Elections
          </NavLink>
        </Typography>

        <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumb}>
          <StyledBreadcrumb onClick={handleOpenDialog} label={name ? `Hi ${name}`  : "Start Voting"} />
        </Breadcrumbs>
      </Toolbar>
      <Modal
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        title="Create Account"
        
      >
        <SignUp
          openDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
          setOpenDialog={setOpenDialog}
        />
      </Modal>
    </AppBar>
  );
}

export default NavBar;