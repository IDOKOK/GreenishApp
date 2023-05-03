import React, { useState } from "react";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {  Grid, Typography, Box } from "@material-ui/core";
import { MuiOtpInput } from "mui-one-time-password-input";
import ResponseButton from "../../Custom/ResponseButton";
import { NavLink, useNavigate } from "react-router-dom";
import useStyles from "./login.styles";
import tokenStorage from "../../../Storage/TokenStorage";
import { auth } from "../../../Service/UserService";
/**
 * OTP (one-time password) input area with configurable designs and features displayed by a Material UI component.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#008080",
    },
  },
});

/**
 * 
 * @reference https://github.com/viclafouch/mui-otp-input
 */
const OtpForm = ( {openDialog, handleCloseDialog, setOpenDialog}) => {
  const [value, setValue] = useState(' ');
   const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const classes = useStyles();

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {}
    const access_token = await tokenStorage.getToken();
    data.code = value;
    const res = await auth(data, access_token);
    if (res.status === 201) {  // if status of the response is 201 
      setErrorMessage("OTP is correct!!!");
      setTimeout(() => {
        handleCloseDialog(); // close the dialog
        navigate("/candidate/all"); // navigate to the candidate page
      }, 5000);
      
    } else {
      
      setErrorMessage(
        "OTP details are incorrect! You have only 15 seconds to try again"
      );
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      setTimeout(() => {
      navigate("/");
      }, 20000);
    }
  
  };
  /** https://github.com/viclafouch/mui-otp-input */
  return (
    <MuiThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Typography variant="h4" className={classes.otp}>
            Enter OTP
          </Typography>
          <Typography variant="h6" className={classes.digit}>
            Please enter the four digit code we just sent to your registerd
            mobile number and email address
          </Typography>
          <Grid item xs={6}>
            <MuiOtpInput
              className={classes.otpField}
              length={6}
              value={value}
              onChange={handleChange}
              separator={<span>-</span>}
            />
          </Grid>
          <Box className={errorMessage ? classes.success : null}>
            {errorMessage && <Box>{errorMessage}</Box>}
            {/* Flash message for submitting the form when the login is not successful */}
          </Box>
          <Grid item xs={12} className={classes.buttonContainer}>
            <ResponseButton text="Send" />
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <NavLink className={classes.loginLink} to="/">
              {" "}
              Resend OTP
            </NavLink>
          </Grid>
        </Grid>
      </form>
    </MuiThemeProvider>
  );
};

export default OtpForm;
