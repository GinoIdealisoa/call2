import { HeartHandshake, Target, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Proximité humaine",
    text: "Chaque interaction compte. Nos agents sont formés pour écouter, comprendre et résoudre avec empathie.",
  },
  {
    icon: Target,
    title: "Performance mesurable",
    text: "Indicateurs clés (NPS, FCR, AHT) suivis en temps réel pour des résultats transparents et mesurables.",
  },
  {
    icon: Sparkles,
    title: "Innovation continue",
    text: "IA conversationnelle, omnicanal, analytique avancée : nous combinons technologie et savoir-faire humain.",
  },
];

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Notre mission
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformer chaque appel en opportunité
          </h2>

          <p className="text-gray-600">
            Nous aidons les marques à construire des relations durables avec leurs clients
            grâce à un service d'excellence et une équipe passionnée.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {pillars.map((p) => {
            const Icon = p.icon;

            return (
              <div
                key={p.title}
                className="p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition bg-white"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mb-5">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {p.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {p.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Mission;