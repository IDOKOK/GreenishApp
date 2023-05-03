import React, { useCallback, useEffect, useState } from "react";
import { Box, Container } from "@material-ui/core";
import NavBar from "./../../NavBar/NavBar";
import useStyles from './candidate.styles';
import ElectionCard from './../../Custom/ElectionCard';
import CandidateGrid from './../../Custom/CandidateGrid';
import { authorizeUser } from "../../../Service/UserService";
import tokenStorage from "../../../Storage/TokenStorage";
import { useNavigate } from "react-router-dom";


export const Candidates = () => {
  const classes = useStyles();
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState('')
  const navigate = useNavigate();
  
  useEffect(() => {
    const getUser = async () => {
      const getToken = tokenStorage.getToken()
      if (getToken) {
        const res = await authorizeUser(getToken);
         if (res) {
           setName(res.firstname);
         } else {
            navigate("/");
         }
      }else {
        console.log('error2')
      }
    }
    getUser()
    
  })
  
  const liftUpCandidateState = useCallback((data) => {
    setCandidates(data);
  }, []);
    
  return (
    <Container className={classes.root} maxWidth="false">
      <Box className={classes.box1}>
        <NavBar name={name} />
        <Box>
          <ElectionCard candidates={candidates} />
        </Box>
        <img
          src="/images/voting-ballot.png"
          alt="description"
          style={{ maxWidth: "60%", height: "100px", marginTop: "50px", marginLeft: '50px' }}
        />

        <Box className={classes}>
          <CandidateGrid liftUpCandidateState={liftUpCandidateState} />
        </Box>
      </Box>
      <Box className={classes}></Box>
    </Container>
  );
};

export default Candidates;