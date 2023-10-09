import * as React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";

interface PortfolioDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  title: string;
  text: string;
  image?: string;
  link?: string;
}

function PortfolioDialog(props: PortfolioDialogProps) {
  const { onClose, selectedValue, open, title, text, image, link  } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle className="flex flex-wrap justify-center text-cyan-500 font-bold text-2xl">
        {title}
      </DialogTitle>
      <DialogContent className="flex flex-wrap justify-center">
        <img src={image} alt="hireMe Dialog" />
        <DialogContentText className="flex flex-wrap text-center justify-center">
          {text}
        </DialogContentText>
        {link ? <button
          className="m-5 py-2 px-5 rounded-lg text-black bg-cyan-700 hover:bg-cyan-800 font-bold text-lg"
          onClick={() =>
            window.open(link)
          }
        >
          Show Me More
        </button>:null}
        <button
          className="m-5 py-2 px-5 rounded-lg text-black bg-cyan-700 hover:bg-cyan-800 font-bold text-lg"
          onClick={handleClose}
        >
          Close
        </button>
      </DialogContent>
    </Dialog>
  );
}

export default PortfolioDialog;
