import * as Yup from 'yup';  // library for validation
/**
 * we use Yup to create a validation model that states that the name field is necessary,
 */
export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  phonenumber: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Invalid phone number")
    .required("Phone number is required"),
  region: Yup.string().required("Required")
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  phonenumber: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Invalid phone number")
    .required("Phone number is required")
});
