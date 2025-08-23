import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plane, Clock, Star } from "lucide-react"
import Link from "next/link"

export function ExclusiveOffersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-[#256FFF] text-white hover:bg-[#1E5ACC] px-3 py-1 text-sm font-medium">
                Ofertas Limitadas
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Ofertas exclusivas do mundo inteiro,
                <span className="text-[#256FFF]"> aproveite.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fique por dentro e aproveite as oportunidades de viajar com desconto para os melhores destinos.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ofertas por tempo limitado</h3>
                  <p className="text-gray-600 text-sm">Descontos especiais que não duram para sempre</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Destinos internacionais</h3>
                  <p className="text-gray-600 text-sm">Viaje para os melhores destinos do mundo</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#256FFF] rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Experiências premium</h3>
                  <p className="text-gray-600 text-sm">Qualidade garantida em todos os nossos pacotes</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-3 rounded-lg transition-all duration-300"
                asChild
              >
                <Link href="/ofertas">Ver Todas as Ofertas</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/contato">Falar com Especialista</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Pessoa no aeroporto"
                className="w-full h-auto object-cover"
              />

              {/* Floating offer card */}
              <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-lg max-w-48">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#256FFF]">50% OFF</div>
                  <div className="text-sm text-gray-600">Europa</div>
                  <div className="text-xs text-gray-500 mt-1">Válido até 31/12</div>
                </div>
              </div>

              {/* Floating destination card */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#256FFF] to-[#1E5ACC] rounded-lg flex items-center justify-center">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Paris</div>
                    <div className="text-sm text-gray-600">A partir de R$ 2.890</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#256FFF] rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#256FFF] rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
