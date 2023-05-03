import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "354px",
    height: "34px",
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "30px",
    lineHeight: "54px",
    position: "relative",
    bottom: "90px",
    left: "65px",
    /* identical to box height */
    color: "#03180B",
  },
  imageList: {
    width: 1200,
    height: "auto",
    margin: 'auto',
    padding: 'auto',
    position: 'relative',
    left: '140px',
    borderRadius: '40px',
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
});

export default useStyles;
