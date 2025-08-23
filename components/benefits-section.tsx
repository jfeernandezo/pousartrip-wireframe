import { MapPin, Award, Shield, Star } from "lucide-react"

const benefits = [
  {
    icon: MapPin,
    title: "Planejamento Personalizado",
    description: "Criamos roteiros sob medida para que sua viagem seja perfeita.",
  },
  {
    icon: Award,
    title: "Atendimento de Excelência",
    description: "Nossa equipe está dedicada a oferecer o melhor suporte do início ao fim.",
  },
  {
    icon: Shield,
    title: "Segurança e Confiança",
    description: "Viaje com a tranquilidade de quem tem especialistas cuidando de tudo.",
  },
  {
    icon: Star,
    title: "Roteiros Únicos",
    description: "Descubra destinos e experiências que vão além do convencional.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">Porque viajar com a PousarTrip?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra os diferenciais que fazem da PousarTrip a escolha ideal para suas viagens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3b82f6] text-white rounded-full mb-6 group-hover:bg-[#1e3a8a] transition-colors duration-300">
                  <IconComponent size={32} />
                </div>

                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4 group-hover:text-[#3b82f6] transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
