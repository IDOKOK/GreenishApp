import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiIconButton-root": {
      borderColor: "#fff",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#fff",
        color: '#fffff',
      },
    },
  },
}));

const MyButton = () => {
  const classes = useStyles();

  return (
    <Button variant="outlined" className={classes.root}>
      My Button
    </Button>
  );
}

export default MyButton;





