import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ana Paula",
    location: "São Paulo - SP",
    rating: 5,
    comment:
      "Experiência incrível! A PousarTrip cuidou de todos os detalhes da nossa viagem para Fernando de Noronha. Atendimento excepcional e preços justos. Recomendo muito!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Marcos Vinícius",
    location: "Rio de Janeiro - RJ",
    rating: 5,
    comment:
      "Viajei com minha família para Porto Seguro e foi perfeito! Desde o planejamento até a execução, tudo funcionou perfeitamente. Já estamos planejando a próxima viagem com eles.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

const ratingDistribution = [
  { stars: 5, percentage: 78 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Avaliações dos <span className="text-[#1e3a8a]">Clientes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre suas experiências conosco
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Rating Overview */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white shadow-lg">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <img src="/placeholder.svg?height=24&width=24" alt="Google" className="w-6 h-6" />
                  <span className="text-lg font-semibold text-gray-900">Google</span>
                </div>
                <div className="text-4xl font-bold text-[#1e3a8a] mb-2">4.8</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${star <= 4 ? "text-[#fbbf24] fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Baseado em 247 avaliações</p>
              </div>

              <div className="space-y-2">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-2 text-sm">
                    <span className="w-4 text-gray-600">{item.stars}</span>
                    <Star className="w-4 h-4 text-[#fbbf24] fill-current" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#fbbf24] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-gray-600 text-right">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="lg:col-span-2 space-y-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 bg-white shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-[#1e3a8a] text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.location}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= testimonial.rating ? "text-[#fbbf24] fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">{testimonial.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Call to action */}
            <div className="text-center pt-6">
              <p className="text-gray-600 mb-4">Quer compartilhar sua experiência?</p>
              <button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 py-2 rounded-lg transition-colors duration-200">
                Deixar Avaliação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
