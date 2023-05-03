import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import useStyles from "./ActiveImageList.styles";

const ActiveElectionImageList = () => {
  const classes = useStyles();
  return (
    <ImageList className={classes.root} sx={{ width: 1200, height: 1000 }} cols={3} rowHeight={400}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
     />
        </ImageListItem>
      ))}
    </ImageList>
  );
  
}


export default ActiveElectionImageList;
const itemData = [
  {
    img: `/images/active-elect-image1.png`,
    title: "Presidential Election",
    author: "@bkristastucchio",
  },
  {
    img: `/images/active-elect-image2.png`,
    title: "National Assembly Election",
    author: "@rollelflex_graphy726",
  },
  {
    img: `/images/active-elect-image3.png`,
    title: "Governorship Election",
    author: "@rollelflex_graphy726",
  },
];
