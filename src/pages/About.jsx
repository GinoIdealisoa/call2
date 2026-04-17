import { CheckCircle2 } from "lucide-react";

const points = [
//   "Équipes multilingues (FR, EN, ES, AR)",
  "Conformité RGPD & sécurité avancée",
  "Plateforme omnicanale (voix, chat, email, WhatsApp)",
  "Reporting personnalisé et tableaux de bord en temps réel",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* STATS */}
        <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">

          <div className="bg-white rounded-2xl p-6 shadow border">
            <p className="text-3xl font-bold text-blue-600">15M+</p>
            <p className="text-sm text-gray-500 mt-1">
              Interactions traitées par an
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow border mt-6">
            <p className="text-3xl font-bold text-blue-600">120+</p>
            <p className="text-sm text-gray-500 mt-1">
              Clients entreprises
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow border">
            <p className="text-3xl font-bold text-blue-600">&lt;30s</p>
            <p className="text-sm text-gray-500 mt-1">
              Temps de réponse moyen
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow border mt-6">
            <p className="text-3xl font-bold text-blue-600">4.9/5</p>
            <p className="text-sm text-gray-500 mt-1">
              Note de satisfaction
            </p>
          </div>

        </div>

        {/* TEXT */}
        <div className="space-y-6 order-1 lg:order-2">

          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            À propos de nous
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            10 ans d'expertise au service de votre relation client
          </h2>

          <p className="text-gray-600 leading-relaxed">
           IpnatSolution accompagne PME, grandes entreprises et startups dans la gestion
            de leur relation client avec des solutions modernes et efficaces.
          </p>

          {/* POINTS */}
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span className="text-gray-700">{p}</span>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
};

export default About;