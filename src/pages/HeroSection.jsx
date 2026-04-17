import { ArrowRight, PhoneCall } from "lucide-react";
import heroImg from "../assets/hero-callcenter.jpg"; 

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponible 24h/24 — 7j/7
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Une <span className="text-blue-600">expérience client</span> qui fait la différence
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            IPNAT solutions accompagne votre entreprise avec des solutions de relation client multicanales :
            appels entrants, support technique, télévente et fidélisation.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3">

            <a
              href="#demo"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Réserver une démo
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>

            <a
              href="#mission"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <PhoneCall className="mr-2 w-4 h-4" />
              Découvrir nos services
            </a>

          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-6 pt-6 text-sm text-gray-600">
            <div>
              <p className="text-2xl font-bold text-black">+250</p>
              <p>Agents qualifiés</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">98%</p>
              <p>Satisfaction client</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">12 ans</p>
              <p>D'expérience</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Call center"
            className="relative rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;