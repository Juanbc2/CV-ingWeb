import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

interface socialsProps {
  url: string;
  name: string;
}

const socials = ({ url, name }: socialsProps) => {
  let size = 35;
  let socials = [
    {
      icon: <FaFacebookF size={size} className="m-auto" />,
      name: "Facebook",
    },
    {
      icon: <FaInstagram size={size} className="m-auto" />,
      name: "Instagram",
    },
    {
      icon: <FaGithub size={size} className="m-auto" />,
      name: "Github",
    },
    {
      icon: <FaLinkedin size={size} className="m-auto" />,
      name: "Linkedin",
    },
    {
      icon: <IoShareSocialOutline size={size} className="m-auto" />,
      name: "Share",
    },
  ];

  let icon = socials.find((social) => social.name === name)?.icon;

  return (
    <div>
      <button
        className="w-20 h-20 bg-cyan-700 rounded-full content-center m-2 hover:bg-cyan-800"
        onClick={() => window.open(url)}
      >
        {icon}
      </button>
    </div>
  );
};

export default socials;
