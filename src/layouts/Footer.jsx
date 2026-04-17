import { Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        {/* LOGO */}
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
              <Headphones className="w-5 h-5" />
            </span>
            IpnatSolution
          </div>

          <p className="text-sm text-gray-400 max-w-xs">
            Votre partenaire de confiance pour une relation client d'excellence.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#accueil" className="hover:text-white transition">
                Accueil
              </a>
            </li>

            <li>
              <a href="#mission" className="hover:text-white transition">
                Notre mission
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-white transition">
                À propos
              </a>
            </li>

            <li>
              <a href="#demo" className="hover:text-white transition">
                Démo
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>+33 1 23 45 67 89</li>
            <li>ipnatsolution@gmail.com</li>
            <li>12 rue des Affaires, Paris</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} IpnatSolution. Tous droits réservés.
      </div>

    </footer>
  );
};

export default Footer;