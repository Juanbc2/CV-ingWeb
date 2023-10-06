interface knowledgeProps {
  title: string;
  text: string;
  image?: string;
}
const Knowledge = ({ title, text, image}: knowledgeProps) => {
  return (
    <div className="text-center bg-neutral-50 p-10 w-96 min-w-max rounded-xl m-2 hover:scale-95">
      <img src={image} alt="knowledge" className="m-auto w-20 h-20" />
      <br></br>
      <h2 className="mb-5 font-bold text-xl">{title}</h2>
      <h4 className="text-gray-500">{text}</h4>
    </div>
  );
};

export default Knowledge;
