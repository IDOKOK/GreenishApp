import React, {useEffect, useState } from "react";
import { Grid, Box, ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import useStyles from "./candidateGrid.styles";
import Index from "../Control/Index";
import { fetchAllCandidates } from '../../Service/Candidate/CandidateService';
import { NavLink } from "react-router-dom";


/**
 *
 * @reference {https://refine.dev/blog/material-ui-grid/}
 *
 */
const CandidateGrid = ({ liftUpCandidateState }) => {
  const classes = useStyles();
  const [images, setImages] = useState([]);

 
  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await fetchAllCandidates();
      if (response) {
        setImages(response);
      }
    };
    fetchCandidates();
    
  }, []);
  
  liftUpCandidateState(images);
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Setting up the Fluid Grid system */}
      <Grid container spacing={5}>
        <Grid item xs={7}>
          <NavLink className={classes.loginLink} to="/candidate">
            <Index.Typography
              text="Candidates"
              variant="h6"
              classes={classes.root}
            />
          </NavLink>
        </Grid>
        <Grid item xs={7} className={classes.list}>
          <ImageList
            rowHeight={250}
            className={classes.imageList}
            cols={4}
            gap={24}
          >
            {images.map((image) => (
              <ImageListItem key={image.id}>
                <img
                  src={`http://127.0.0.1:5000/candidate/${image.id}/image`}
                  alt={image.candidate_name}
                />
                <ImageListItemBar
                  title={image.candidate_name}
                  subtitle={<span>Party: {image.party.party_name}</span>}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CandidateGrid;
