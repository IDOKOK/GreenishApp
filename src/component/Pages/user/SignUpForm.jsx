import React, {useState} from 'react';
import {useFormik} from 'formik' //https://formik.org/docs/overview
import { Grid, TextField, Typography, Box } from "@material-ui/core";
import { NavLink, useNavigate } from "react-router-dom";
import useStyles from './signUp.styles';
import ResponseButton from '../../Custom/ResponseButton';
import { signUpValidationSchema } from '../../../Auth/inputValidation';
import { filterRegionByName } from '../../../Utilities/regionUtil';
import { registerUser } from '../../../Service/UserService';


// initialising the form state to be updated by the handlers
const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phonenumber: '',
    region: '',
}
/**
 * 
 * The shape is then built using Formik. Using the validationSchema prop, 
 * we specify the form's starting values and supply the Formik component with the validation template.
 *  To manage form submission, we specify the onSubmit method as well
 */

/**https://www.npmjs.com/package/yup */



 const SignUpForm = ({
   openDialog,
   handleCloseDialog,
   setOpenDialog,
 }) => {
   const [successMessage, setSuccessMessage] = useState("");
   const [isSignUp, setSignUp] = useState(false);
   const classes = useStyles();
   const navigate = useNavigate();
   //https://formik.org/docs/overview
   const formik = useFormik({
     initialValues,
     onSubmit: async (values) => {
       const data = {};
       data.firstname = values.firstName;
       data.lastname = values.lastName;
       data.email = values.email;
       data.password = values.password;
       data.phonenumber = values.phonenumber;
       data.region_id = filterRegionByName(values.region);
       const res = await registerUser(data); // calling the user service and saving the user's data
       if (res) {
         setSignUp(true);
         setSuccessMessage("Registration successful! Please log in.");
         setTimeout(() => {
           setSignUp(false);
           handleCloseDialog();
           navigate("/login");
         }, 5000);
         //       handleCloseDialog();   // close the dialog
       }
     },
     validationSchema: signUpValidationSchema//validate the fields with the schema
   });

   /**https://refine.dev/blog/material-ui-grid/ */
   return (
     <form className={classes.root} onSubmit={formik.handleSubmit}>
       {/* Form component */}
       <Box className={isSignUp ? classes.success : null}>
         {isSignUp && <Box>{successMessage}</Box>}
         {/* Flash message for submitting the form */}
       </Box>
       <Grid container spacing={2}>
         <Grid item xs={12} sm={6}>
           <TextField
             required
             id="firstName"
             label="First Name"
             variant="outlined"
             onBlur={formik.handleBlur}
             onChange={formik.handleChange}
             value={formik.values.firstName}
           />
           {formik.touched.firstName && formik.errors.firstName ? (
             <Box className={classes.error}>{formik.errors.firstName}</Box>
           ) : null}
         </Grid>
         <Grid item xs={12} sm={6}>
           <TextField
             required
             id="lastName"
             label="Last Name"
             variant="outlined"
             onBlur={formik.handleBlur}
             onChange={formik.handleChange}
             value={formik.values.lastName}
           />
           {formik.touched.lastName && formik.errors.lastName ? (
             <Box className={classes.error}>{formik.errors.lastName}</Box>
           ) : null}
         </Grid>

         <Grid item xs={12}>
           <TextField
             required
             id="email"
             label="Email"
             variant="outlined"
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
             onBlur={formik.handleBlur}
             onChange={formik.handleChange}
             value={formik.values.phonenumber}
           />
           {formik.touched.phonenumber && formik.errors.phonenumber ? (
             <Box className={classes.error}>{formik.errors.phonenumber}</Box>
           ) : null}
         </Grid>
         <Grid item xs={12}>
           <TextField
             required
             id="region"
             label="region"
             variant="outlined"
             onBlur={formik.handleBlur}
             onChange={formik.handleChange}
             value={formik.values.region}
           />
           {formik.touched.region && formik.errors.region ? (
             <Box className={classes.error}>{formik.errors.region}</Box>
           ) : null}
         </Grid>
         <Grid item xs={12} className={classes.buttonContainer}>
           <ResponseButton text="Create Account" />
         </Grid>
         <Grid item xs={12} className={classes.buttonContainer}>
           <Typography
             variant="body2"
             color="textSecondary"
             className={classes.alreadyHaveAccount}
           >
             Already have an account?{" "}
             <NavLink
               //   onClick={handleOpenLoginDialog}
               className={classes.loginLink}
               exact='true'
               to="/login"
             >
               Login
             </NavLink>
           </Typography>
         </Grid>
       </Grid>
     </form>
   );
 };

export default SignUpForm;