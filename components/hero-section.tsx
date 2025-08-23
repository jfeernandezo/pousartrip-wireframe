import { FC } from 'react'
import { Button } from "@/components/ui/button"

export const HeroSection: FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Banner de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/banners/hero-banner.jpg" 
          alt="Banner PousarTrip" 
          className="w-full h-full object-cover"
        />
        {/* Overlay para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center min-h-[85vh] max-w-4xl mx-auto relative -translate-y-16">
          <div className="relative">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Por que <span className="text-[#256FFF]">Pousar</span>
              <br />é melhor que decolar!
            </h1>

            <div className="bg-white/90 backdrop-blur-sm border-2 border-[#256FFF] px-8 py-4 rounded-lg mb-8 relative shadow-lg">
              <p className="text-lg md:text-xl font-semibold text-[#1E1E1E]">
                Aproveite as melhores oportunidades
                <br />
                para realizar sua viagem dos sonhos!
              </p>
            </div>

            <div className="absolute -top-4 -right-8 hidden lg:block">
              <svg className="w-12 h-12 text-[var(--pousar-primary)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              <div className="absolute top-8 left-8 w-16 h-8 border-dashed border-2 border-[var(--pousar-primary)] opacity-50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Botão de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-[#256FFF] hover:bg-[#256FFF]/90 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
          <span className="ml-2 hidden sm:inline">Suporte</span>
        </Button>
      </div>
    </section>
  )
}
