interface descriptionProps {
  title: string;
  text: string;
}

const Description = ({ title, text }: descriptionProps) => {
  return (
    <div className="text-center p-10 w-96 min-w-max m-2">
      <h2 className="mb-5 font-bold text-4xl">{title}</h2>
      <h4 className="mb-2 font-medium text-gray-500 whitespace-normal max-w-xl">{text}</h4>
    </div>
  );
};

export default Description;
