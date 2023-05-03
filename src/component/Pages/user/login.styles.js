import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50%",
      background: "#FFF",
      textAlign: "center",
      justifyContent: "center",
    },
  },
  paper: {
    padding: theme.spacing(3),
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 400,
    margin: "auto",
    marginTop: theme.spacing(1),
  },
  header: {
    textAlign: "center",
    marginBottom: "1rem",
    marginLeft: theme.spacing(20),
    fontWeight: 600,
  },
  otp: {
    textAlign: "center",
    marginTop: "1rem",
    marginLeft: theme.spacing(20),
    fontWeight: 600,
  },
  digit: {
    position: 'relative',
    width: '80%',
    right: '95px',
    bottom: '22px',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '160%',
    fontWeight: '400',
    color: '#03180B',
    textAlign: "center",
    marginTop: "4rem",
    marginLeft: theme.spacing(20),
  },
  otpField: {
    border: '1px solid #03180B',
    borderRadius: '10px',
    height: '62px',
    width: '480px',
    flex: 'none',
    order: 3,
    flexGrow: 0,
    boxSizing: 'border-box',
  },
  success: {
      position: 'relative',
      // top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
      color: 'red',
      fontWeight: 'bold',
},
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonContainer: {
    textAlign: "center",
  },
  loginLink: {
    color: theme.palette.success.main,
    fontWeight: 700,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  alreadyHaveAccount: {
    fontWeight: 600,
    color: "#03180B",
  },
  error: {
    color: "red",
  },
}));

export default useStyles;
