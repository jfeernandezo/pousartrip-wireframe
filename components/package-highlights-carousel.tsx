"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, MapPin, Clock, Star, Users, Plane } from "lucide-react"

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
      const maxIndex = packages.length - visibleCards
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = packages.length - visibleCards
      return prev === 0 ? maxIndex : prev - 1
    })
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Plane className="w-4 h-4 text-gray-800" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Pacotes em <span className="text-yellow-500">Destaque</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofertas imperdíveis com descontos especiais e benefícios exclusivos. Aproveite antes que o tempo acabe!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                width: `${(packages.length * 100) / visibleCards}%`,
              }}
            >
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`flex-shrink-0 hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group ${
                    pkg.featured ? "ring-2 ring-yellow-400" : ""
                  }`}
                  style={{ width: `calc(${100 / visibleCards}% - ${(8 * (visibleCards - 1)) / visibleCards}px)` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {pkg.featured && (
                        <Badge className="bg-yellow-400 text-gray-800 hover:bg-yellow-500">⭐ Destaque</Badge>
                      )}
                      <Badge
                        variant={pkg.type === "internacional" ? "default" : "secondary"}
                        className={pkg.type === "internacional" ? "bg-blue-600" : "bg-green-600"}
                      >
                        {pkg.type === "internacional" ? "🌍 Internacional" : "🇧🇷 Nacional"}
                      </Badge>
                    </div>

                    {/* Discount */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                        -{pkg.discount}%
                      </div>
                    </div>

                    {/* Countdown */}
                    <div className="absolute bottom-3 right-3">
                      <CountdownTimer endDate={pkg.endDate} />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Title and Location */}
                      <div>
                        <h3 className="font-bold text-xl text-gray-800 line-clamp-1">{pkg.title}</h3>
                        <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{pkg.destination}</span>
                        </div>
                      </div>

                      {/* Rating and Duration */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{pkg.rating}</span>
                          <span className="text-gray-500">({pkg.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{pkg.duration}</span>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-2">
                        {pkg.benefits.slice(0, 3).map((benefit, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500 line-through">
                            R$ {pkg.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-2xl font-bold text-blue-600">
                            R$ {pkg.discountPrice.toLocaleString()}
                          </span>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">Ver Detalhes</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
            onClick={nextSlide}
            disabled={currentIndex >= packages.length - visibleCards}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: packages.length - visibleCards + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
