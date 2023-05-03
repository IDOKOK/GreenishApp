import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button1: {
    width: "420px",
    height: "51px",
    color: theme.palette.getContrastText(theme.palette.error.main),
    backgroundColor: theme.palette.error.main,
    borderRadius: "58px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40px",
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  },
  button2: {
    width: "420px",
    height: "51px",
    color: "#fff",
    backgroundColor: "#196D3A",
    borderRadius: "58px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

export default useStyles;
