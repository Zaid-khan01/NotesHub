// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      // Delay scrolling till route changes
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "notes", label: "Notes" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" }, // Route
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-[7vw] lg:px-[20vw] transition duration-300 ${isScrolled
          ? "bg-[#050414]/70 backdrop-blur-md"
          : "bg-transparent"
        }`}
      style={{
        borderBottom: isScrolled ? "none" : "none",
        boxShadow: "none", // ensures no shadow line at top
      }}
    >

      <div className="flex justify-between items-center py-5 text-white">
        {/* Logo */}
        <div className="text-xl font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Notes</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Hub</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id || (location.pathname === "/contact" && item.id === "contact") ? "text-[#8245ec]" : ""}`}>
              {item.id === "contact" ? (
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              ) : (
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-16 w-4/5 bg-[#050414]/70 backdrop-blur-lg rounded-lg shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id || (location.pathname === "/contact" && item.id === "contact") ? "text-[#8245ec]" : ""}`}>
                {item.id === "contact" ? (
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                ) : (
                  <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
