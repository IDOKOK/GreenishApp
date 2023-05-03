import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "50vh",
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url(/images/election_2023.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    borderRadius: "20px",
  },
  card: {
    position: "relative",
      top: '20px',
    right: "250px",
    width: "100%",
    maxWidth: 600,
    padding: 16,
    backgroundColor: "transparent",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    "&::before": {
      content: '""',
      position: "relative",
      top: 0,
      right: 0,
      bottom: 0,
      left: "50px",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      zIndex: -1,
      opacity: 0.9,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "16px 8px",
    },
  },
  content: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: "16px",
    textAlign: "left",
    width: "100%",
  },
  actionItem: {
    display: "inline-block",
    width: "calc(100% / 8)",
  },
  shareButton: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: "15px",
    marginRight: "auto",
  },
  learnMoreButton: {
    color: "#3CB371",
    fontWeight: "500",
    fontSize: "15px",
    marginRight: "auto",
  },
  button: {
    textTransform: "capitalize",
    marginRight: "60px",
    height: "50px",
    width: "180px",
    borderRadius: "40px",
    position: "relative",
    left: "500px",
    bottom: "60px",
    color: "#fff",
    background: "#196D3A",
  },
  typo: {
    fontWeight: "bold",
    color: "#fff",
  },

  cardContentWrapper: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "20%",
    padding: "40px",
    color: "white",
    marginTop: "10px",
    marginLeft: "10px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "300px",
    marginLeft: "40px",
  },
  media: {
    height: 40,
  },
  image: {
    background:
      "linear-gradient(360deg, #031C0D 17.42%, rgba(0, 0, 0, 0) 113.74%",
    height: "455px",
    width: "1240px",
    borderRadius: "20px",
  },
}));

export default useStyles;