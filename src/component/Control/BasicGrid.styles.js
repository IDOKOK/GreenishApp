import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "blue",
    background: "#03180B",
    height: "751px",
    width: "1440px",
  },
  typo1: {
    position: "relative",
    width: "725px",
    height: "130px",
    // left: "357px",
    top: "90px",
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "50px",
    lineHeight: "66px",
    textAlign: "center",
    color: "#FFF",
  },
  typo2: {
    position: "relative",
    width: "500px",
    left: "57px",
    top: "100px",
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "160%",
    textAlign: "center",
    color: "#fff",
  },
  iconButton: {
    position: "relative",
    color: "white",
    left: "100px",
    top: "200px",
    border: "1px solid #FFFFFF",
    borderRadius: "80px",
  },
  thumbPrint: {
    position: "relative",
    top: "250px",
    left: "150px",
    fontSize: 80,
  },
});

export default useStyles;
