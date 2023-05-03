import React from 'react';
import { Button } from "@material-ui/core";
import useStyles from './ResponseButton.styles';


const ResponseButton = ({text}) => {
  const classes = useStyles();

    return <Button type='submit' className={text === 'Cancel'? classes.button1 : classes.button2}>{text}</Button>;
}

export default ResponseButton;
