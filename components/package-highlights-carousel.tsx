"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Users, Plane, ChevronLeft, ChevronRight } from "lucide-react"

interface PackageHighlight {
  id: string
  title: string
  destination: string
  type: "nacional" | "internacional"
  originalPrice: number
  discountPrice: number
  discount: number
  image: string
  benefits: string[]
  duration: string
  rating: number
  reviews: number
  endDate: string
  featured?: boolean
}

const packages: PackageHighlight[] = [
  {
    id: "1",
    title: "Pacote Completo Cancún",
    destination: "Cancún, México",
    type: "internacional",
    originalPrice: 3299,
    discountPrice: 2499,
    discount: 25,
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?w=400&h=300&fit=crop&crop=center",
    benefits: ["All Inclusive", "Voo + Hotel", "Transfer Incluso"],
    duration: "7 dias",
    rating: 4.8,
    reviews: 234,
    endDate: "2025-01-20T23:59:59",
    featured: true,
  },
  {
    id: "2",
    title: "Fernando de Noronha Premium",
    destination: "Fernando de Noronha, PE",
    type: "nacional",
    originalPrice: 2899,
    discountPrice: 2199,
    discount: 24,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center",
    benefits: ["Mergulho Incluso", "Pousada 4★", "Passeios"],
    duration: "5 dias",
    rating: 4.9,
    reviews: 187,
    endDate: "2025-01-15T23:59:59",
  },
  {
    id: "3",
    title: "Buenos Aires + Bariloche",
    destination: "Argentina",
    type: "internacional",
    originalPrice: 2799,
    discountPrice: 1999,
    discount: 29,
    image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=400&h=300&fit=crop&crop=center",
    benefits: ["2 Cidades", "Hotel 4★", "City Tour"],
    duration: "8 dias",
    rating: 4.7,
    reviews: 156,
    endDate: "2025-01-25T23:59:59",
  },
  {
    id: "4",
    title: "Jericoacoara Exclusivo",
    destination: "Jericoacoara, CE",
    type: "nacional",
    originalPrice: 1899,
    discountPrice: 1399,
    discount: 26,
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=400&h=300&fit=crop&crop=center",
    benefits: ["Resort 5★", "Buggy Tour", "Kitesurf"],
    duration: "6 dias",
    rating: 4.8,
    reviews: 203,
    endDate: "2025-01-18T23:59:59",
    featured: true,
  },
  {
    id: "5",
    title: "Dubai + Abu Dhabi",
    destination: "Emirados Árabes",
    type: "internacional",
    originalPrice: 4599,
    discountPrice: 3299,
    discount: 28,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop&crop=center",
    benefits: ["Luxo Total", "Desert Safari", "Burj Khalifa"],
    duration: "9 dias",
    rating: 4.9,
    reviews: 98,
    endDate: "2025-01-30T23:59:59",
  },
]

function CountdownTimer({ endDate }: { endDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const end = new Date(endDate).getTime()
      const difference = end - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className="flex items-center gap-1 text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
      <Clock className="w-3 h-3" />
      <span>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
      </span>
    </div>
  )
}

export function PackageHighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(2)
  const [filter, setFilter] = useState<"Todos" | "Nacional" | "Internacional">("Todos")

  const filteredPackages = packages.filter(
    (pkg) =>
      filter === "Todos" ||
      (filter === "Nacional" && pkg.type === "nacional") ||
      (filter === "Internacional" && pkg.type === "internacional"),
  )

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1)
      } else {
        setVisibleCards(2)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = filteredPackages.length - visibleCards
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = filteredPackages.length - visibleCards
      return prev === 0 ? maxIndex : prev - 1
    })
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Plane className="h-8 w-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Pacotes em <span className="text-yellow-500">Destaque</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofertas imperdíveis com descontos especiais e benefícios exclusivos. Aproveite antes que o tempo acabe!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["Todos", "Nacional", "Internacional"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category as typeof filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:-translate-y-2 ${
                filter === category
                  ? "bg-blue-900 hover:bg-blue-800 text-white"
                  : "border-blue-900 text-blue-900 hover:bg-blue-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            disabled={currentIndex >= filteredPackages.length - visibleCards}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                width: `${(filteredPackages.length * 100) / visibleCards}%`,
              }}
            >
              {filteredPackages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    pkg.featured ? "ring-2 ring-yellow-400" : ""
                  }`}
                  style={{ width: `calc(${100 / filteredPackages.length}% - 1rem)` }}
                >
                  <div className="relative">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {pkg.featured && <Badge className="bg-yellow-500 text-black font-semibold">⭐ Destaque</Badge>}
                      <Badge
                        variant="secondary"
                        className={pkg.type === "internacional" ? "bg-blue-600 text-white" : "bg-green-600 text-white"}
                      >
                        {pkg.type === "internacional" ? "🌍 Internacional" : "🇧🇷 Nacional"}
                      </Badge>
                    </div>

                    {/* Discount */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{pkg.discount}%
                      </div>
                    </div>

                    {/* Countdown */}
                    <div className="absolute bottom-4 right-4">
                      <CountdownTimer endDate={pkg.endDate} />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 leading-tight">{pkg.title}</h3>
                        <p className="text-gray-600 text-sm flex items-center gap-1">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{pkg.destination}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{pkg.rating}</span>
                        <span className="text-xs text-gray-500">({pkg.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {pkg.duration}
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.benefits.slice(0, 3).map((benefit, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl md:text-2xl font-bold text-blue-900">
                            R$ {pkg.discountPrice.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            R$ {pkg.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">por pessoa</p>
                      </div>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 md:px-6 text-sm md:text-base">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(filteredPackages.length / visibleCards) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / visibleCards) === index ? "bg-blue-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg">
            Ver Todos os Pacotes
          </Button>
        </div>
      </div>
    </section>
  )
}
