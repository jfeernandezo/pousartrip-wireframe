"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, MapPin, Wifi, Car, Coffee, Waves } from "lucide-react"

const hotels = [
  {
    id: 1,
    name: "Resort Paradise Bahia",
    location: "Porto Seguro, BA",
    rating: 4.8,
    reviews: 1247,
    price: "R$ 320",
    originalPrice: "R$ 450",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Piscina", "Estacionamento"],
    badge: "Mais Procurado",
  },
  {
    id: 2,
    name: "Hotel Copacabana Palace",
    location: "Rio de Janeiro, RJ",
    rating: 4.9,
    reviews: 2156,
    price: "R$ 890",
    originalPrice: "R$ 1200",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Café", "Piscina"],
    badge: "Luxo",
  },
  {
    id: 3,
    name: "Pousada Vila Charms",
    location: "Gramado, RS",
    rating: 4.7,
    reviews: 892,
    price: "R$ 280",
    originalPrice: "R$ 380",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Café", "Estacionamento"],
    badge: "Romântico",
  },
  {
    id: 4,
    name: "Resort Costa do Sauípe",
    location: "Costa do Sauípe, BA",
    rating: 4.6,
    reviews: 1543,
    price: "R$ 420",
    originalPrice: "R$ 580",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Piscina", "All Inclusive"],
    badge: "All Inclusive",
  },
  {
    id: 5,
    name: "Hotel Fasano São Paulo",
    location: "São Paulo, SP",
    rating: 4.8,
    reviews: 1876,
    price: "R$ 650",
    originalPrice: "R$ 850",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Café", "Business Center"],
    badge: "Business",
  },
  {
    id: 6,
    name: "Pousada Maravilha",
    location: "Fernando de Noronha, PE",
    rating: 4.9,
    reviews: 743,
    price: "R$ 980",
    originalPrice: "R$ 1300",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Piscina", "Vista Mar"],
    badge: "Paraíso",
  },
  {
    id: 7,
    name: "Hotel Unique",
    location: "São Paulo, SP",
    rating: 4.7,
    reviews: 1432,
    price: "R$ 720",
    originalPrice: "R$ 950",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Piscina", "Design"],
    badge: "Design",
  },
  {
    id: 8,
    name: "Txai Resort Itacaré",
    location: "Itacaré, BA",
    rating: 4.8,
    reviews: 967,
    price: "R$ 540",
    originalPrice: "R$ 720",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Piscina", "Spa"],
    badge: "Eco Resort",
  },
  {
    id: 9,
    name: "Hotel Santa Teresa",
    location: "Rio de Janeiro, RJ",
    rating: 4.6,
    reviews: 1234,
    price: "R$ 480",
    originalPrice: "R$ 640",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Café", "Arte"],
    badge: "Boutique",
  },
  {
    id: 10,
    name: "Pousada Picinguaba",
    location: "Ubatuba, SP",
    rating: 4.5,
    reviews: 678,
    price: "R$ 350",
    originalPrice: "R$ 480",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Piscina", "Praia"],
    badge: "Praia",
  },
  {
    id: 11,
    name: "Hotel Villa Bahia",
    location: "Salvador, BA",
    rating: 4.7,
    reviews: 1089,
    price: "R$ 390",
    originalPrice: "R$ 520",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "História", "Centro"],
    badge: "Histórico",
  },
  {
    id: 12,
    name: "Pousada Literária",
    location: "Paraty, RJ",
    rating: 4.8,
    reviews: 856,
    price: "R$ 420",
    originalPrice: "R$ 560",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Café", "Cultura"],
    badge: "Cultural",
  },
]

const amenityIcons = {
  "Wi-Fi": Wifi,
  Piscina: Waves,
  Estacionamento: Car,
  Café: Coffee,
  "All Inclusive": Star,
  "Business Center": Coffee,
  "Vista Mar": Waves,
  Design: Star,
  Spa: Star,
  Arte: Star,
  Praia: Star,
  História: Star,
  Centro: Star,
  Cultura: Star,
}

export function HotelsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1)
      } else if (window.innerWidth < 768) {
        setVisibleCards(2)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3)
      } else {
        setVisibleCards(4)
      }
    }

    updateVisibleCards()
    window.addEventListener("resize", updateVisibleCards)
    return () => window.removeEventListener("resize", updateVisibleCards)
  }, [])

  const maxIndex = Math.max(0, hotels.length - visibleCards)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Os Melhores <span className="text-yellow-500">Hotéis</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Selecionamos os hotéis mais incríveis para tornar sua estadia inesquecível
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-slate-50 disabled:opacity-50"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-slate-50 disabled:opacity-50"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                width: `${(hotels.length * 100) / visibleCards}%`,
              }}
            >
              {hotels.map((hotel) => (
                <div key={hotel.id} className="flex-shrink-0 w-80 h-[520px]">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white h-full flex flex-col">
                    <div className="relative flex-shrink-0">
                      <img
                        src={hotel.image || "/placeholder.svg"}
                        alt={hotel.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {hotel.badge}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold text-slate-700">{hotel.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg text-slate-800 mb-2 line-clamp-2 min-h-[3.5rem]">
                        {hotel.name}
                      </h3>

                      <div className="flex items-center gap-1 text-slate-600 mb-3">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-4 min-h-[2rem] flex-wrap">
                        {hotel.amenities.slice(0, 3).map((amenity) => {
                          const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Star
                          return (
                            <div key={amenity} className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-full">
                              <IconComponent className="h-3 w-3 text-slate-600" />
                              <span className="text-xs text-slate-600">{amenity}</span>
                            </div>
                          )
                        })}
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-slate-800">{hotel.price}</span>
                              <span className="text-sm text-slate-500 line-through">{hotel.originalPrice}</span>
                            </div>
                            <p className="text-xs text-slate-500">por noite</p>
                          </div>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Ver Detalhes</Button>
                        </div>

                        <div className="text-xs text-slate-500">{hotel.reviews} avaliações</div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-slate-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
