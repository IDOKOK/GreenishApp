import React from 'react';
import { Typography } from '@material-ui/core'; /** https://mui.com/material-ui/react-app-bar **/

const Typograghy = ({text, variant, classes }) => {
    return (
      <div>
        <Typography variant={variant} className={classes} align='center' paragraph>
          {text}
        </Typography>
      </div>
    );
    
}

export default Typograghy;