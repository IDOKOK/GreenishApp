import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function MyImageList() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="woven"
      cols={3}
      gap={8}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=4 5x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: `/images/my-image1.png`,
    title: "mobile",
  },
  {
    img: `/images/my-image2.png`,
    title: "snapshot",
  },
  {
    img: `/images/my-image3.png`,
    title: "ballot",
  },
 
 
];
