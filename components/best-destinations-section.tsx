"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Calendar, Users } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Fernando de Noronha",
    location: "Pernambuco, Brasil",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 2847,
    price: "R$ 2.890",
    originalPrice: "R$ 3.200",
    duration: "5 dias",
    category: "Nacional",
    highlight: "Paraíso Natural",
    description: "Águas cristalinas e vida marinha única no arquipélago mais preservado do Brasil.",
  },
  {
    id: 2,
    name: "Paris",
    location: "França",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=1170&auto=format&fit=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 5632,
    price: "R$ 4.590",
    originalPrice: "R$ 5.100",
    duration: "7 dias",
    category: "Internacional",
    highlight: "Cidade Luz",
    description: "Romance, cultura e gastronomia na capital mundial do amor e da arte.",
  },
  {
    id: 3,
    name: "Maldivas",
    location: "Oceano Índico",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 3421,
    price: "R$ 8.990",
    originalPrice: "R$ 10.500",
    duration: "6 dias",
    category: "Internacional",
    highlight: "Luxo Tropical",
    description: "Bangalôs sobre as águas cristalinas em um dos destinos mais exclusivos do mundo.",
  },
  {
    id: 4,
    name: "Gramado",
    location: "Rio Grande do Sul, Brasil",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 4156,
    price: "R$ 1.290",
    originalPrice: "R$ 1.450",
    duration: "4 dias",
    category: "Nacional",
    highlight: "Charme Europeu",
    description: "Arquitetura europeia, chocolate artesanal e clima de montanha no sul do Brasil.",
  },
  {
    id: 5,
    name: "Santorini",
    location: "Grécia",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 2934,
    price: "R$ 5.790",
    originalPrice: "R$ 6.400",
    duration: "6 dias",
    category: "Internacional",
    highlight: "Pôr do Sol Único",
    description: "Casas brancas, cúpulas azuis e os mais belos pôr do sol do Mediterrâneo.",
  },
  {
    id: 6,
    name: "Chapada Diamantina",
    location: "Bahia, Brasil",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1876,
    price: "R$ 890",
    originalPrice: "R$ 1.100",
    duration: "5 dias",
    category: "Nacional",
    highlight: "Aventura Natural",
    description: "Cachoeiras, grutas e trilhas em um dos cenários mais selvagens do Brasil.",
  },
]

export function BestDestinationsSection() {
  const [filter, setFilter] = useState<"Todos" | "Nacional" | "Internacional">("Todos")

  const filteredDestinations = destinations.filter((dest) => filter === "Todos" || dest.category === filter)

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8 text-[#256FFF]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Melhores Destinos <span className="text-[#256FFF]">Selecionados</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra os destinos mais incríveis do Brasil e do mundo, cuidadosamente selecionados pela nossa equipe de
            especialistas.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["Todos", "Nacional", "Internacional"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category as typeof filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-blue-900 hover:bg-blue-800 text-white"
                  : "border-blue-900 text-blue-900 hover:bg-blue-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <Card
              key={destination.id}
              className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#256FFF] text-white font-semibold">{destination.highlight}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {destination.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{destination.name}</h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {destination.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-[#256FFF] text-[#256FFF]" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                    <span className="text-xs text-gray-500">({destination.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />2 pessoas
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-900">{destination.price}</span>
                      <span className="text-sm text-gray-500 line-through">{destination.originalPrice}</span>
                    </div>
                    <p className="text-xs text-gray-600">por pessoa</p>
                  </div>
                  <Button className="bg-[#256FFF] hover:bg-[#1E5ACC] text-white font-semibold px-6">
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg">
            Ver Todos os Destinos
          </Button>
        </div>
      </div>
    </section>
  )
}
