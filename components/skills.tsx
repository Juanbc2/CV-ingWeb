import {FaLightbulb} from "react-icons/fa";

interface skillProps {
    name: string;
  }
  
  const skills = ({ name }: skillProps) => {
    return (
      <div>
      <FaLightbulb className="mr-5 float-left" color="orange" />
      <h2>{name}</h2>
      </div>
    );
  };
  
  export default skills;