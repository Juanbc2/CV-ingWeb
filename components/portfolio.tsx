interface portfolioProps {
  title: string;
  text: string;
  image?: string;
  link?: string;
}
const Portfolio = ({ title, text, image, link }: portfolioProps) => {
  return (
    <div className="m-10 text-justify bg-neutral-50 p-10 w-20 min-w-max hover:bg-neutral-100">
      <div className="h-36 flex justify-center">
        <img src={image} className="m-auto w-40" />
      </div>
      <br></br>
      <h2 className="mb-5 font-bold text-xl">{title}</h2>
      <h4 className="mb-2 font-medium text-gray-500 whitespace-normal max-w-xs">
        {text}
      </h4>
      <a
        className="text-orange-500 font-bold text-lg"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        Learn More {">"}
      </a>
    </div>
  );
};

export default Portfolio;
