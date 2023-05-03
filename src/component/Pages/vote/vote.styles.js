import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  title: {
    color: "#03180B",
    position: "relative",
  },
  imageList: {
    width: 500,
    border: "1px solid #DCDFE2",
    boxSizing: "border-box",
    marginTop: "20PX",
    padding: "auto",
    position: "relative",
    top: "20px",
    backgroundColor: "#fff",
    // left: "140px",
    borderRadius: "6px",
  },
  cardContentWrapper: {
    position: "relative",
    margin: "auto",
    padding: "auto",
  },
  imageForm: {
    borderRadius: "110px",
    marginTop: "20px",
  },
  imageFormHover: {
    border: "2px solid green",
  },
  roundedImg: {
    borderRadius: "100%",
    width: "100%",
    height: "100%",
  },
  typo1: {
    color: "#03180B",
    height: "37px",
    lineHeight: "110%",
    fontSize: "34px",
    fontWeight: 700,
    width: "234px",
  },
  shareButton: {
    color: "#000",
    fontWeight: "bold",
    fontSize: "13px",
    marginRight: "auto",
  },
  learnMoreButton: {
    color: "#3CB371",
    fontWeight: "550",
    fontSize: "13px",
    marginRight: "auto",
  },
  typo2: {
    color: "#03180B",
    marginTop: "30px",
    // height: "29px",
    // lineHeight: "29px",
    fontSize: "18px",
    fontWeight: 700,
  },
  typo3: {
    color: "#03180B",
    marginTop: "30px",
    fontStyle: "normal",
    height: "25px",
    fontSize: "16px",
    fontWeight: 600,
  },
  typo4: {
    position: "relative",
    color: "#03180B",
    marginTop: "20px",
    fontStyle: "normal",
    height: "22px",
    fontSize: "14px",
    fontWeight: 400,
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "10px",
    // marginLeft: auto,
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
