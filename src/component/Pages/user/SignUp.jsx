import React from 'react';
import SignUpForm from './SignUpForm';

const SignUp = ({
  openDialog,
  handleCloseDialog,
  setOpenDialog
}) => {
  return (
    <SignUpForm
      openDialog={openDialog}
      handleCloseDialog={handleCloseDialog}
      setOpenDialog={setOpenDialog}
    />
  );
};


export default SignUp;