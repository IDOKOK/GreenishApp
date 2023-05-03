import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useStyles from "./ThemeButton.styles";
import Chip from '@mui/material/Chip';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { NavLink } from 'react-router-dom';

// button for view All elections
const finalTheme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            // https://mui.com/system/getting-started/the-sx-prop/#spacing
            px: 1,
            py: 0.25,
            // https://mui.com/system/borders/#border-radius
            borderRadius: 1, // 4px as default.
          }),
        label: {
          padding: 'initial',
        },
        icon: ({ theme }) =>
          theme.unstable_sx({
            mr: 0.5,
            ml: '-2px',
          }),
      },
    },
  },
});

const ThemeButton = () => {
    const classes = useStyles();
    return (
      <ThemeProvider theme={finalTheme}>
        <NavLink className={classes.loginLink} to="/candidate">
          <Chip
            color="success"
            label={<span>Register Candidate</span>}
            icon={<ArrowRightAltIcon />}
            className={classes.root}
          />
        </NavLink>
      </ThemeProvider>
    );
}
export default ThemeButton;