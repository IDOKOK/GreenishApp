import OtpForm from "./OtpForm"

const MuiOtp = ({
  openDialog,
  handleCloseDialog,
  setOpenDialog,
}) => {
  return (
    <OtpForm
      openDialog={openDialog}
      handleCloseDialog={handleCloseDialog}
      setOpenDialog={setOpenDialog}
    />
  );
};

export default MuiOtp;