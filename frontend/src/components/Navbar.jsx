import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { display: "Features", href: "#features" },
    { display: "How It Works", href: "#howitworks" },
    { display: "Pricing", href: "#pricing" },
    
  ];

  return (
    <nav className="sticky top-0 w-full bg-neutral-800/30 backdrop-blur-lg z-10">
      <div className="flex justify-between items-center px-6 py-4">
        
        <div className="text-xl font-bold text-white h1 logo">singlesheet</div>

       
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        
        <ul className="hidden md:flex items-center gap-6 text-sm text-white">
          {navLinks.map((link) => (
            <li key={link.display} className="cursor-pointer font-medium">
              <a href={link.href} className="hover:text-purple-300 transition">
                {link.display}
              </a>
            </li>
          ))}
        </ul>
      </div>

      
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-neutral-700/80 backdrop-blur-lg text-white">
          {navLinks.map((link) => (
            <li key={link.display} className="cursor-pointer font-medium">
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.display}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;