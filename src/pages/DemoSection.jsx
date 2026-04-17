import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Calendar,
  Send,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function DemoSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    needType: "",
    agentsCount: "",
    demoDate: "",
    demoTime: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation simple
    if (!formData.firstName || !formData.email) {
      toast.error("❌ Prénom et Email obligatoires !");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toast.success("Demande envoyée avec succès !");

      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        needType: "",
        agentsCount: "",
        demoDate: "",
        demoTime: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="demo" className="py-20 bg-white">

      {/* TOAST CONTAINER */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-600 rounded-full mb-5">
            <Calendar className="w-5 h-5" />
            Réservez votre démo gratuite
          </div>

          <h2 className="text-4xl font-bold mb-3">
            Découvrez notre solution en action
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Planifiez une démonstration personnalisée adaptée à vos besoins.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* FORM */}
          <div className="lg:col-span-2 border border-gray-100 shadow-xl rounded-3xl p-8">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Nom / Prénom */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Prénom *"
                  className="border p-3 rounded-xl w-full"
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Nom"
                  className="border p-3 rounded-xl w-full"
                />
              </div>

              {/* Entreprise / Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Entreprise"
                  className="border p-3 rounded-xl w-full"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  type="email"
                  className="border p-3 rounded-xl w-full"
                />
              </div>

              {/* Téléphone */}
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Téléphone"
                className="border p-3 rounded-xl w-full"
              />

              {/* Type besoin */}
              <select
                name="needType"
                value={formData.needType}
                onChange={handleChange}
                className="border p-3 rounded-xl w-full"
              >
                <option value="">Type de besoin</option>
                <option value="inbound">Appels entrants</option>
                <option value="outbound">Appels sortants</option>
                <option value="whatsapp">WhatsApp Business</option>
                <option value="crm">CRM & Téléphonie</option>
              </select>

              {/* Date / heure */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="demoDate"
                  value={formData.demoDate}
                  onChange={handleChange}
                  className="border p-3 rounded-xl w-full"
                />
                <input
                  type="time"
                  name="demoTime"
                  value={formData.demoTime}
                  onChange={handleChange}
                  className="border p-3 rounded-xl w-full"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Message..."
                className="border p-3 rounded-xl w-full"
              />

              {/* BUTTON */}
              <button
  type="submit"
  disabled={loading}
  className={`w-full border border-blue-600 text-blue-600 py-3 rounded-xl flex items-center justify-center gap-2 transition ${
    loading
      ? "opacity-70 cursor-not-allowed"
      : "hover:bg-blue-600 hover:text-white"
  }`}
>
  {loading ? (
    <>
      <svg
        className="w-5 h-5 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      Envoi...
    </>
  ) : (
    <>
      Réserver ma démo
      <Send className="w-4 h-4" />
    </>
  )}
</button>
            </form>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6">

              <h3 className="text-lg font-semibold mb-4">
                Contact direct
              </h3>

              <ul className="space-y-4 text-sm">

                <li className="flex gap-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <p className="opacity-80">Téléphone</p>
                    <p className="font-semibold">+33 1 23 45 67 89</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="opacity-80">Email</p>
                    <p className="font-semibold">ipnatsolution@gmail.com</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p className="opacity-80">Adresse</p>
                    <p className="font-semibold">12 rue des Affaires, Paris</p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default DemoSection;