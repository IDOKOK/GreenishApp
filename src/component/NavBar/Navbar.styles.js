// styling the navigation bar using useSytles library
import { makeStyles } from "@material-ui/core/styles";
/**
 * https://javascript.works-hub.com/learn/how-to-create-a-responsive-navbar-using-material-ui-and-react-router-f9a01
 */
const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(4, 43, 19, 0.5)",
    backdropFilter: "blur(17px)",
    position: "relative",
    width: "948px",
    height: "76px",
    left: "246px",
    top: "20px",
    borderRadius: "50px",
    justifyContent: "space-evenly",
    display: "flex",
  },
  link: {
    flexGrow: "1",
    cursor: "pointer",
    width: "149px",
    height: "17px",
    lineHeight: "17px",
    fontSize: "14px",
    fontWeight: 600,
    fontStyle: "normal",
    fontFamily: "sans-serif",
    textDecoration: "none",
    justifyContent: "space-evenly",
    display: "flex",
    color: "#fff",
  },
  logo: {
    boxSizing: "border- box",
    width: "125px",
    height: "45px",
    fontWeight: 600,
    fontSize: "29px",
    color: "#fff",
    textDecoration: "none",
    justifyContent: "space-evenly",
    display: "flex",
  },
}));


export default useStyles;