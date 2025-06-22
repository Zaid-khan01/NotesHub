import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (itemId) => {
    if (itemId === "contact") {
      navigate("/contact");
    } else {
      navigate("/");

      // Scroll after small delay (for DOM to load)
      setTimeout(() => {
        const section = document.getElementById(itemId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#050414] border-t border-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Notes Hub</h2>

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "Home", id: "home" },
            { name: "Notes", id: "notes" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=61576616820968" },
            { icon: <FaTwitter />, link: "https://x.com/Zaid_Khan1123" },
            { icon: <FaGithub />, link: "https://github.com/Zaid-khan01" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/zaid-khan-1123abc/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/_its_zaid.khan_/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Notes Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
