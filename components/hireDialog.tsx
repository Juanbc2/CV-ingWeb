import * as React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";

interface HireDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function HireDialog(props: HireDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle className="flex flex-wrap justify-center text-cyan-500 font-bold text-2xl">
        Thanks for trying to Hire Me!
      </DialogTitle>
      <DialogContent className="flex flex-wrap justify-center">
        <img src="images/gracias.png" alt="hireMe Dialog" />
        <DialogContentText className="flex flex-wrap text-center justify-center">
          I&apos;m currently not looking for any new opportunities, but Ill be sure to
          reach out if that changes.
        </DialogContentText>
        <button
          className="m-5 py-2 px-5 rounded-lg text-slate-50 bg-cyan-700 hover:bg-cyan-800 font-bold text-lg glow-on-hover"
          
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=1gI_HGDgG7c")
          }
        >
          Funny Video!
        </button>
        <button
          className="m-5 py-2 px-5 rounded-lg text-slate-50 bg-cyan-700 hover:bg-cyan-800 font-bold text-lg"
          onClick={handleClose}
        >
          Close
        </button>
      </DialogContent>
    </Dialog>
  );
}

export default HireDialog;
