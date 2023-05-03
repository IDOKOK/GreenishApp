import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "263px",
    // height: "37px",
    fontFamily: "sans-serif",
    fontWeight: 700,
    fontSize: "34px",
    lineHeight: "110%",
    color: "#03180B",
  },
  dialogTitleText: {
    flexGrow: 1,
  },
  icon: {
    //   display: "flex",
    position: "absolute",
    top: "10px",
    right: "50px",
    color: "#000",
    fontWeight: 900,
    background: "#EBF6EF",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
}));

export default useStyles;