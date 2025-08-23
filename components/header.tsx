import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-[var(--pousar-background)] shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-12 w-auto">
              <img 
                src="/logo.png" 
                alt="PousarTrip Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-[var(--pousar-text)] hover:text-[var(--pousar-primary)] transition-colors duration-200 font-medium">
              Início
            </Link>
            <Link
              href="/pacotes"
              className="text-[var(--pousar-text)] hover:text-[var(--pousar-primary)] transition-colors duration-200 font-medium"
            >
              Pacotes
            </Link>
            <Link
              href="/sobre"
              className="text-[var(--pousar-text)] hover:text-[var(--pousar-primary)] transition-colors duration-200 font-medium"
            >
              Sobre Nós
            </Link>
            <Link
              href="/contato"
              className="text-[var(--pousar-text)] hover:text-[var(--pousar-primary)] transition-colors duration-200 font-medium"
            >
              Contato
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-[var(--pousar-primary)] text-[var(--pousar-text)] hover:bg-[var(--pousar-primary)] hover:text-[var(--pousar-background)] transition-colors duration-200"
                asChild
              >
                <Link href="/vender-milhas">Vender Milhas</Link>
              </Button>
              <Button
                variant="outline"
                className="border-[var(--pousar-primary)] text-[var(--pousar-text)] hover:bg-[var(--pousar-primary)] hover:text-[var(--pousar-background)] transition-colors duration-200"
                asChild
              >
                <Link href="/hoteis">Hotéis</Link>
              </Button>
              <Button
                variant="outline"
                className="border-[var(--pousar-primary)] text-[var(--pousar-text)] hover:bg-[var(--pousar-primary)] hover:text-[var(--pousar-background)] transition-colors duration-200"
                asChild
              >
                <Link href="/atendimento">Atendimento Personalizado</Link>
              </Button>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              className="bg-[var(--pousar-primary)] hover:bg-[var(--pousar-primary-hover)] text-[var(--pousar-background)] px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
              asChild
            >
              <Link href="/login">Entrar</Link>
            </Button>
            <Button
              className="bg-[var(--pousar-background)] border-2 border-[var(--pousar-primary)] text-[var(--pousar-text)] hover:bg-[var(--pousar-primary)] hover:text-[var(--pousar-background)] px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
              asChild
            >
              <Link href="/cadastro">Cadastro</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
