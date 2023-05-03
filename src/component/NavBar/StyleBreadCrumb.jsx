import Chip from '@mui/material/Chip';
import { styled } from "@mui/material/styles";


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
//   const backgroundColor =
//     theme.palette.mode === 'light'
//       ? theme.palette.grey[100]
//       : theme.palette.grey[800];
  return {
    backgroundColor: "rgba(4, 43, 19, 0.5)",
    border: "0.5px solid rgba(255, 255, 255, 0.6)",
    position: "relative",
    top: "1px",
    // left: '42px',
    // height: theme.spacing(3),
    color: "#FFFFFF",
    width: "141px",
    height: "62px",
    borderRadius: "50px",
    boxSizing: "border-box",
    backdropFilter: "blur(17px)",
    justifyContent: "space-evenly",
    display: "flex",
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: "#042B13",
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: "#FFFFFF",
    },
  };
}) 

export default StyledBreadcrumb;