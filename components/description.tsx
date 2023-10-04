interface descriptionProps {
  title: string;
  text: string;
}

const Description = ({ title, text }: descriptionProps) => {
  return (
    <div className="md:text-center">
      <h1 className="mb-10 font-bold text-4xl">{title}</h1>
      <h4 className="w-80 text-center">{text}</h4>
    </div>
  );
};

export default Description;
