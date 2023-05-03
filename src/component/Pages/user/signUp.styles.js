import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
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
  success: {
    position: "fixed",
    // top: '50%',
    left: "40%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
  },
}));

export default useStyles;