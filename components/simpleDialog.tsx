import * as React from "react";
import { DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import Dialog from "@mui/material/Dialog";

interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Thanks for trying to Hire Me!</DialogTitle>
      <DialogContent className="flex flex-wrap justify-center">
        <img src="images/gracias.png" alt="hireMe Dialog" />
        <DialogContentText>
          Im currently not looking for any new opportunities, but Ill be sure to
          reach out if that changes.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default SimpleDialog;
