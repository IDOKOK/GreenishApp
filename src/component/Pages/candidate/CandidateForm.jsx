/** form to register candidate */
import React, {useState} from "react";
import * as Yup from "yup";
import useStyles from "./candidateForm.styles";
import ResponseButton from "../../Custom/ResponseButton";
import { useFormik } from 'formik';  //https://formik.org/docs/overview
import { registerCandidate } from "../../../Service/Candidate/CandidateService";
import { filterPartyByName } from "../../../Utilities/partyUtil";
import { NavLink } from "react-router-dom";
import {
  FormHelperText,
  InputLabel,
  Grid,
  Paper,
  TextField,
  Box,
  Typography
} from "@material-ui/core";

const initialValues = {
    fullName: '',
    party: '',
};

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    party: Yup.string().required("Required"),
    // image: Yup.mixed()
    // .test(
    //   "fileSize",
    //   "File size too large",
    //   (value) => value && value.size <= 5000000
    // )
    // .test(
    //   "fileType",
    //   "Unsupported file type",
    //   (value) =>
    //     value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
    // )
    // .required("Please upload an image file"),
});
 
//component for candidates to add their images
const CandidateForm =() =>{
  const [selectedFile, setSelectedFile] = useState('');
  const[message, setMessage] = useState(null);
  
  const handleFileChange = (event) => {
    event.preventDefault();
    console.log(event.target.files);
      setSelectedFile(event.target.files[0]);
      
    };
  const classes = useStyles();
  
  
// handle the form data
  const onSubmit = async (values) => {
    const formData = new FormData();
    const candidate_name = values.fullName;
    const party_id = filterPartyByName(values.party);
    formData.append("party_id", party_id);
    formData.append("image", selectedFile);
    formData.append("candidate_name", candidate_name);
    console.log("form data =>", formData);
    const res = await registerCandidate(formData);
    if (res) {
      setTimeout(() => {
        setMessage("Candidates have been registered successfully! ");
      },1000)
      
    }
  }
    
    const formik = useFormik({
      initialValues,
      onSubmit: onSubmit,
      validationSchema: validationSchema,
    });


  return (
    <Paper className={classes.paper}>
      <form onSubmit={formik.handleSubmit}>
        {/* Form component */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              required
              id="fullName"
              label="FullName"
              variant="outlined"
              style={{ width: "400px" }}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <Box className={classes.error}>{formik.errors.fullName}</Box>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="party"
              label="Party"
              variant="outlined"
              style={{ width: "400px" }}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.party}
            />
            {formik.touched.party && formik.errors.party ? (
              <Box className={classes.error}>{formik.errors.party}</Box>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="image">Upload Image</InputLabel>
            <input
              type="file"
              id="image"
              name="image"
              className={classes.input}
              onChange={handleFileChange}
            />
            <FormHelperText>Choose an image to upload</FormHelperText>
            <Grid item xs={12} className={classes.buttonContainer}>
              <ResponseButton text="Submit" />
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.alreadyHaveAccount}
            >
              You have registered as Candidate? Go back{" "}
              <NavLink className={classes.loginLink} to="/">
                {" "}
                Home
              </NavLink>
            </Typography>
          </Grid>
          <Box className={message ? classes.success : null}>
            {message && <Box>{message}</Box>}
            {/* Flash message for submitting the form when the login is not successful */}
          </Box>
        </Grid>
      </form>
    </Paper>
  );
}

export default CandidateForm;
