import React from 'react'
// import { Container, CssBaseline, Box } from "@mui/material"; //@mui/material/
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import useStyles from './mainPageContent1.styles';
import useStyles2 from './mainPageContent2.styles';
import useStyles3 from "./mainPageContent3.styles";
import useStyles4 from "./mainPageContent4.styles";
import useContainerStyles from './container.styles';
import ActiveElectionImageList from "../Custom/ActiveElectionImageList";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Faq from "./pages/faq";
import Index from '../Control/Index';
import NavBar from '../NavBar/NavBar';
import GridTypo from '../Custom/GridTypo';



export const MainPage = () => {
  const classes = useStyles();
  const classes1 = useContainerStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const classes4 = useStyles4();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes1.root} maxWidth="false">
        <Box className={classes.root}>
          <NavBar />
          <Box>
            <Index.Typography
              text="Easy and Secured Online Election/Voting Excellence"
              variant="h3"
              classes={classes.typo1}
            />
          </Box>
          <Box>
            <Index.Typography
              text="Greenish ensures poll fairness, increases voter participation, and saves a ton of time. Its free for now, so
               don't miss the opportunity"
              variant="h6"
              classes={classes.typo2}
            />
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src="/images/voting-ballot.png"
              alt="description"
              style={{ maxWidth: "30%", height: "auto", marginTop: '100px' }}
            />
          </Box>
        </Box>
        <Box className={classes2.root}>
          <Index.BasicGrid />
        </Box>
        <Box className={classes3.root}>
          <GridTypo />
          <ActiveElectionImageList />
        </Box>
        <Box className={classes4.root}></Box>
      </Container>
    </React.Fragment>
  );
}

export default MainPage;