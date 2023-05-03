import React, {useState} from "react";
import { useFormik } from 'formik';  //https://formik.org/docs/overview
import { Grid, TextField, Typography, Paper, Box } from "@material-ui/core";
import { loginValidationSchema } from "../../../Auth/inputValidation";
import { NavLink } from "react-router-dom";
import useStyles from "./login.styles";
import { loginUser } from '../../../Service/UserService';
import tokenStorage from "../../../Storage/TokenStorage";
import ResponseButton from "../../Custom/ResponseButton";
import Modal from "../../Custom/Modal";
import MuiOtp from './MuiOtp';

const initialValues = {
            email: '',
            password: '',
            phonenumber: ''
 }

const LoginForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

    const handleOpenDialog = () => {
      setOpenDialog(true);
    };

    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
  const classes = useStyles();
  // using formik  /**https://formik.org/docs/overview */  for validating the login input field
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const data = {};
       data.email = values.email;
       data.password = values.password;
       data.phonenumber = values.phonenumber;
      const res = await loginUser(data); // calling the user service and saving the user's data
      if (res.access_token) {
        tokenStorage.clearToken();
        tokenStorage.setToken(res.access_token);  // setting the token in the local storage in the client
        setErrorMessage(null);
        setOpenDialog(true);  // open the dialog
      } else {
        setErrorMessage("Ooops your details are incorrect! Check and try again or signup");
   }

    },
    validationSchema: loginValidationSchema,
  });

  return (
    <Paper className={classes.paper}>
      <form className={classes.root} onSubmit={formik.handleSubmit}>
        <Box className={errorMessage ? classes.success : null}>
          {errorMessage && <Box>{errorMessage}</Box>}
          {/* Flash message for submitting the form when the login is not successful */}
        </Box>
        <Grid container spacing={4}>
          <Typography variant="h4" className={classes.header}>
            Login
          </Typography>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              style={{ width: "400px" }}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Box className={classes.error}>{formik.errors.email}</Box>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              autoComplete="new-password"
              variant="outlined"
              style={{ width: "400px" }}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <Box className={classes.error}>{formik.errors.password}</Box>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phonenumber"
              label="Phone number"
              variant="outlined"
              style={{ width: "400px" }}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phonenumber}
            />
            {formik.touched.phonenumber && formik.errors.phonenumber ? (
              <Box className={classes.error}>{formik.errors.phonenumber}</Box>
            ) : null}
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <ResponseButton text="Login" />
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.alreadyHaveAccount}
            >
              You don't have an account? Go back{" "}
              <NavLink className={classes.loginLink} to="/">
                {" "}
                Home
              </NavLink>
            </Typography>
          </Grid>
          <Modal
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
            // title="Enter OTP"
          >
            <MuiOtp
              openDialog={openDialog}
              handleCloseDialog={handleCloseDialog}
              handleOpenDialog={handleOpenDialog}
              setOpenDialog={setOpenDialog}
            />
          </Modal>
        </Grid>
      </form>
    </Paper>
  );
};

export default LoginForm;
