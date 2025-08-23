import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-[var(--pousar-background)] shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Grupo da Esquerda */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <div className="h-12 w-auto">
                <img 
                  src="/logo.png" 
                  alt="PousarTrip Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-12">
              <Link href="/" className="text-[var(--pousar-text)] hover:text-[var(--pousar-primary)] transition-colors duration-200 font-medium whitespace-nowrap">
                Início
              </Link>
              <Link
                href="/pacotes"
                className="text-[var(--pousar-text)] hover:text-[var(--pousar-primary)] transition-colors duration-200 font-medium whitespace-nowrap"
              >
                Pacotes
              </Link>
              <Link
                href="/contato"
                className="text-[var(--pousar-text)] hover:text-[var(--pousar-primary)] transition-colors duration-200 font-medium whitespace-nowrap"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Grupo da Direita */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-[var(--pousar-primary)] text-[var(--pousar-text)] hover:bg-[var(--pousar-primary)] hover:text-[var(--pousar-background)] transition-colors duration-200"
                asChild
              >
                <Link href="/vender-milhas">Vender Milhas</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-[var(--pousar-primary)] text-[var(--pousar-text)] hover:bg-[var(--pousar-primary)] hover:text-[var(--pousar-background)] transition-colors duration-200"
                asChild
              >
                <Link href="/hoteis">Hotéis</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-[var(--pousar-primary)] text-[var(--pousar-text)] hover:bg-[var(--pousar-primary)] hover:text-[var(--pousar-background)] transition-colors duration-200"
                asChild
              >
                <Link href="/atendimento">Atendimento Personalizado</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 ml-4">
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
      </div>
    </header>
  )
}
