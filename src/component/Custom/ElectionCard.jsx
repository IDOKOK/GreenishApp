import React, {useCallback, useState} from 'react';
import { CardActions,Typography,CardContent, Card, Button, Container, Box } from "@material-ui/core";
import useStyles from "./electionCard.styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Modal from "../Custom/Modal";
import VoteForm from '../Pages/vote/VoteForm';

const ElectionCard = ({candidates}) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const lifUpState = useCallback((id) => {
    console.log("lifUpState =>", id);
  }, []);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <Container className={classes.root} maxWidth="false">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Box className={classes.cardContentWrapper}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={classes.typo}
            >
              2023 Presidential Elections
            </Typography>
          </Box>
        </CardContent>
        <CardActions className={classes.cardActions}>
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
            {candidates.length}
          </Typography>
        </CardActions>
      </Card>
      <Box flexGrow={1}>
        <Button
          className={classes.button}
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={handleOpenDialog}
        >
          Place My Vote
        </Button>
      </Box>
      <Modal
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        // title="Place My Vote"
      >
        <VoteForm
          openDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
          setOpenDialog={setOpenDialog}
          handleOpenDialog={handleOpenDialog}
          lifUpState={lifUpState}
        />
      </Modal>
    </Container>
  );
};

export default ElectionCard;
