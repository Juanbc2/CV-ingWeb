import PortfolioDialog from "./portfolioDialog";
import React from "react";
import { useState } from "react";

interface portfolioProps {
  title: string;
  text: string;
  description: string;
  image?: string;
  link?: string;
}

const Portfolio = ({ title, text, image, link,description }: portfolioProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="m-10 text-justify bg-neutral-50 min-w-max hover:bg-neutral-100">
      <PortfolioDialog
        title={title}
        text={description}
        image={image}
        link={link}
        open={open}
        selectedValue=""
        onClose={handleClose}
      />
      <div className="mt-10 h-36 flex justify-center bg-neutral-100">
        <img src={image} alt="Portfolio image" className="m-auto w-40" />
      </div>
      <br></br>
      <div className="mx-10 mb-5 w-[14rem] text-left">
        <h2 className="mb-5 font-medium text-xl">{title}</h2>
        <h4 className="mb-2 font-medium text-gray-500 whitespace-normal max-w-xs">
          {text}
        </h4>
        <button
          className="text-cyan-700 font-bold text-lg"
          onClick={handleClickOpen}
        >
          Learn More {">"}
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
