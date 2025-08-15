import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-[#1e3a8a] font-bold text-lg">P</span>
              </div>
              <span className="text-white font-bold text-xl">PousarTrip</span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Sua agência de viagens especializada em criar experiências únicas e memoráveis. Cuidamos de cada detalhe
              para que você aproveite o que realmente importa: sua jornada.
            </p>

            <div className="flex space-x-3">
              <Link
                href="https://instagram.com/pousartrip"
                target="_blank"
                className="w-9 h-9 bg-[#3b82f6] rounded-lg flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors duration-200"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://facebook.com/pousartrip"
                target="_blank"
                className="w-9 h-9 bg-[#3b82f6] rounded-lg flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors duration-200"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com/pousartrip"
                target="_blank"
                className="w-9 h-9 bg-[#3b82f6] rounded-lg flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors duration-200"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://youtube.com/pousartrip"
                target="_blank"
                className="w-9 h-9 bg-[#3b82f6] rounded-lg flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors duration-200"
              >
                <Youtube size={18} />
              </Link>
              <Link
                href="https://linkedin.com/company/pousartrip"
                target="_blank"
                className="w-9 h-9 bg-[#3b82f6] rounded-lg flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors duration-200"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2: Destinos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Destinos</h3>
            <div className="space-y-2">
              <Link
                href="/destinos/nacional"
                className="block text-gray-300 text-sm hover:text-white transition-colors"
              >
                Nacional
              </Link>
              <Link
                href="/destinos/internacional"
                className="block text-gray-300 text-sm hover:text-white transition-colors"
              >
                Internacional
              </Link>
              <Link
                href="/destinos/promocoes"
                className="block text-gray-300 text-sm hover:text-white transition-colors"
              >
                Promoções
              </Link>
              <Link href="/destinos/pacotes" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Pacotes
              </Link>
            </div>
          </div>

          {/* Column 3: Atendimento */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Atendimento</h3>
            <div className="space-y-2">
              <Link href="/contato" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Fale Conosco
              </Link>
              <Link href="/suporte" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Suporte
              </Link>
              <Link href="/cancelamento" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Cancelamento
              </Link>
              <Link href="/reagendamento" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Reagendamento
              </Link>
            </div>
          </div>

          {/* Column 4: Termos de pagamento */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Termos de pagamento</h3>
            <div className="space-y-2">
              <Link
                href="/politica-cancelamento"
                className="block text-gray-300 text-sm hover:text-white transition-colors"
              >
                Política de Cancelamento
              </Link>
              <Link href="/termos-condicoes" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Termos e Condições
              </Link>
              <Link href="/lgpd" className="block text-gray-300 text-sm hover:text-white transition-colors">
                LGPD
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center lg:text-left">
              <p className="text-gray-300 text-sm">CNPJ: 57.219.237/0001-85</p>
              <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
              <p className="text-gray-300 text-sm">Avenida Brasil, 1615, Sala 12 e 13</p>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-sm">© 2024 PousarTrip. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
