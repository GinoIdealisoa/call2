import { useState, useEffect } from "react";
import { Menu, X, Headphones } from "lucide-react";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#mission", label: "Notre mission" },
  { href: "#about", label: "À propos" },
  { href: "#demo", label: "Démo" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 md:h-20">
        
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
            <Headphones className="w-5 h-5" />
          </span>
          <span className="text-gray-900">IPNAT</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop button */}
        <div className="hidden md:block">
          <a
            href="#demo"
            className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
          >
            Demander un devis
          </a>
        </div>

        {/* Mobile button */}
        <button
          aria-label="Menu"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="max-w-6xl mx-auto py-4 flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded"
                >
                  {l.label}
                </a>
              </li>
            ))}

            <li className="px-4 pt-2">
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Demander un devis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;