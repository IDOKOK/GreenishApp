import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  paper: {
    position: "relative",
    padding: theme.spacing(5),
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    maxWidth: "100%",
    height: "100%",
    margin: "auto",
  },
  box1: {
    background: "#FFF",
    height: "1513px",
    width: "1440px",
    alignItems: "center",
  },
  list: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
