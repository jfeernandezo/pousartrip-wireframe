import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Promoção Especial: 30% OFF em Pacotes para o Nordeste",
    excerpt: "Aproveite nossa promoção exclusiva e descubra as belezas do nordeste brasileiro com desconto imperdível.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "15 de Janeiro, 2024",
    category: "Promoções",
  },
  {
    id: 2,
    title: "Novos Destinos: Chapada Diamantina e Lençóis Maranhenses",
    excerpt: "Expandimos nosso portfólio com dois destinos únicos que prometem experiências inesquecíveis na natureza.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "10 de Janeiro, 2024",
    category: "Atualizações",
  },
  {
    id: 3,
    title: "Dicas de Viagem: Como Aproveitar ao Máximo suas Férias",
    excerpt: "Confira nossas dicas exclusivas para tornar sua próxima viagem ainda mais especial e memorável.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
    date: "5 de Janeiro, 2024",
    category: "Dicas",
  },
]

export function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">Fique por dentro das nossas novidades</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Acompanhe as últimas promoções, novos destinos e dicas exclusivas para suas viagens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#3b82f6] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>

                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3 group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <Button
                  variant="outline"
                  className="w-full border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-colors duration-200 bg-transparent"
                  asChild
                >
                  <Link href={`/blog/${post.id}`} className="flex items-center justify-center">
                    Leia Mais
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#1e3a8a] hover:bg-[#3b82f6] text-white px-8 py-3 rounded-lg transition-colors duration-200"
            asChild
          >
            <Link href="/blog">Ver Todos os Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
