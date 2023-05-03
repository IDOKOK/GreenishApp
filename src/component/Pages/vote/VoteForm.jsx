import React, {useState, useEffect} from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@material-ui/core";
import useStyles from "./vote.styles";
import { fetchAllCandidates } from './../../../Service/Candidate/CandidateService'
import ResponseButton from "../../Custom/ResponseButton";

const VoteForm = ({
  openDialog,
  handleCloseDialog,
  setOpenDialog,
  handleOpenDialog,
  lifUpState,
}) => {
  const [images, setImages] = useState([]);
  const [selectedCandidateId, setSelectedCandidateId] = useState(null);
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    lifUpState(selectedCandidateId);
    handleOpenDialog()
  };

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await fetchAllCandidates();
      if (response) {
        setImages(response);
      }
    };
    fetchCandidates();
  }, []);
  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className={classes.typo1}
      >
        Place My Vote
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        className={classes.typo2}
      >
        2023 Presidential Elections
      </Typography>
      <Box className={classes.cardActions}>
        <Typography size="small" className={classes.learnMoreButton}>
          Date:
        </Typography>
        <Typography size="small" className={classes.shareButton}>
          25th of February
        </Typography>
        <Typography size="small" className={classes.learnMoreButton}>
          Registered Voters:
        </Typography>
        <Typography size="small" className={classes.shareButton}>
          100,0000
        </Typography>
        <Typography size="small" className={classes.learnMoreButton}>
          No of Candidates:
        </Typography>
        <Typography size="small" className={classes.shareButton}>
          {images.length}
        </Typography>
      </Box>
      <Box className={classes.cardContentWrapper}></Box>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        className={classes.typo3}
      >
        Select Your Candidate
      </Typography>
      {/* <Grid item xs={12} className={classes.buttonContainer}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className={classes.typo4}
          >
            Select Your Candidate
          </Typography>
        </Grid> */}

      <Box sx={{ flexGrow: 1, bgcolor: "#cfe8fc", height: "100vh" }}>
        {/* Setting up the Fluid Grid system */}
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <ImageList
              rowHeight={100}
              className={classes.imageList}
              cols={4}
              gap={44}
            >
              {images.map((image) => (
                <ImageListItem
                  key={image.id}
                  className={classes.imageForm}
                  onClick={() => {
                    setSelectedCandidateId(image.id);
                  }}
                  style={{
                    border:
                      selectedCandidateId === image.id
                        ? "2px dashed green"
                        : "2px solid grey",
                  }}
                >
                  <img
                    src={`http://127.0.0.1:5000/candidate/${image.id}/image`}
                    alt={image.candidate_name}
                    className={classes.roundedImg}
                    onMouseOver={(event) => {
                      event.currentTarget.classList.add(classes.imageFormHover);
                    }}
                    // remove the hover styles when the mouse leaves the image
                    onMouseOut={(event) => {
                      event.currentTarget.classList.remove(
                        classes.imageFormHover
                      );
                    }}
                  />
                  {/* <ImageListItemBar
                      title={image.candidate_name}
                      subtitle={<span>Party: {image.party.party_name}</span>}
                    /> */}
                  <ImageListItemBar
                    title={image.candidate_name}
                    subtitle={<span>by: {image.party.party_name}</span>}
                    // position="below"
                    className={classes.title}
                    style={{ backgroundColor: "white" }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12} className={classes.buttonContainer}>
        <ResponseButton text="Cast my Vote" />
      </Grid>
      </form>
    </Container>
  );
};

export default VoteForm;