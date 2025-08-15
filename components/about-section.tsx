import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&h=500&q=80"
                alt="Equipe PousarTrip planejando viagens"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/20 to-transparent"></div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3b82f6] rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#1e3a8a] rounded-full opacity-30"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#1e3a8a] leading-tight">Pousar é melhor que decolar!</h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Na PousarTrip, nossa missão é transformar o ato de viajar em experiências únicas e memoráveis. Cuidamos de
              cada detalhe para que você possa aproveitar o que realmente importa: a sua jornada.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                <span className="text-gray-700">Mais de 1000 viagens realizadas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                <span className="text-gray-700">Atendimento personalizado 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                <span className="text-gray-700">Parceiros em todo o Brasil</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#1e3a8a] hover:bg-[#3b82f6] text-white px-8 py-3 rounded-lg transition-colors duration-200"
              asChild
            >
              <Link href="/sobre">Conheça nossa história</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
