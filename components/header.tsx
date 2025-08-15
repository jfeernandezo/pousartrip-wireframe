import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-[#1e3a8a] font-bold text-xl">PousarTrip</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#1e3a8a] transition-colors duration-200 font-medium">
              Início
            </Link>
            <Link
              href="/pacotes"
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors duration-200 font-medium"
            >
              Pacotes
            </Link>
            <Link
              href="/sobre"
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors duration-200 font-medium"
            >
              Sobre Nós
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contato"
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors duration-200 font-medium"
            >
              Contato
            </Link>
          </nav>

          <Button
            className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
            asChild
          >
            <Link href="https://wa.me/5547984483870" target="_blank">
              Entrar
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
