import { FaGithub } from "react-icons/fa"; // GitHub Icon
import { SiNetlify } from "react-icons/si"; // Netlify Icon

const Footer = () => {
  return (
    <footer className="w-full bg-[#4E342E] py-6 text-center text-white">
      <div className="flex justify-center items-center space-x-6 mb-2">
        {/* GitHub Link */}
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>

        {/* Netlify Link */}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-colors duration-300"
        >
          <SiNetlify size={24} />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Chocolate History. All rights reserved.</p>
    </footer>
  );
};

export default Footer;