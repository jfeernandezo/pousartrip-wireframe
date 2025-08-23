"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users, Plane, Hotel, Package } from "lucide-react"

export function SearchFormSection() {
  const [activeTab, setActiveTab] = useState("passagens")

  const tabs = [
    { id: "passagens", label: "Passagens", icon: Plane },
    { id: "hoteis", label: "Hotéis", icon: Hotel },
    { id: "pacotes", label: "Pacotes", icon: Package },
  ]

  return (
    <section className="relative -mt-16 z-30 mb-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-7xl mx-auto border border-gray-100">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? "text-[var(--pousar-primary)] border-[var(--pousar-primary)]"
                      : "text-[var(--pousar-text)] border-transparent hover:text-[var(--pousar-primary)]"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Search Form */}
          {activeTab === "passagens" ? (
            <div className="space-y-4 mb-6">
              {/* First row: Origin, Destination, Ida, Volta */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Origin */}
                <div className="space-y-2">
                  <Label htmlFor="origin" className="text-sm font-medium text-gray-700">
                    Origem
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="origin"
                      placeholder="De onde você sai?"
                      className="pl-10 h-12 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                    />
                  </div>
                </div>

                {/* Destination */}
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-sm font-medium text-gray-700">
                    Destino
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="destination"
                      placeholder="Para onde você vai?"
                      className="pl-10 h-12 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                    />
                  </div>
                </div>

                {/* Ida */}
                <div className="space-y-2">
                  <Label htmlFor="departure" className="text-sm font-medium text-gray-700">
                    Ida
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="departure"
                      type="date"
                      className="pl-10 h-12 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                    />
                  </div>
                </div>

                {/* Volta */}
                <div className="space-y-2">
                  <Label htmlFor="return" className="text-sm font-medium text-gray-700">
                    Volta
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="return"
                      type="date"
                      placeholder="Opcional"
                      className="pl-10 h-12 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                    />
                  </div>
                </div>
              </div>

              {/* Second row: Passageiros, Class, and Search Button with equal dimensions */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
                {/* Passageiros */}
                <div className="space-y-2">
                  <Label htmlFor="passengers" className="text-sm font-medium text-gray-700">
                    Passageiros
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Select>
                      <SelectTrigger className="pl-10 h-12 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]">
                        <SelectValue placeholder="1 adulto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 adulto</SelectItem>
                        <SelectItem value="2">2 adultos</SelectItem>
                        <SelectItem value="3">3 adultos</SelectItem>
                        <SelectItem value="4">4 adultos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Classe */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Classe</Label>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]">
                      <SelectValue placeholder="Econômica" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Econômica</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="business">Executiva</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Search Button */}
                <div className="md:col-span-2">
                  <Button
                    size="lg"
                    className="bg-[var(--pousar-primary)] hover:bg-[var(--pousar-primary-hover)] text-[var(--pousar-background)] h-12 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
                  >
                    Buscar Passagens
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Origin */}
              <div className="space-y-2">
                <Label htmlFor="origin" className="text-sm font-medium text-gray-700">
                  Origem
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="origin"
                    placeholder="De onde você sai?"
                    className="pl-10 h-12 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <Label htmlFor="destination" className="text-sm font-medium text-gray-700">
                  Destino
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="destination"
                    placeholder="Para onde você vai?"
                    className="pl-10 h-12 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                  {activeTab === "passagens" ? "Ida" : "Check-in"}
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="date"
                    type="date"
                    className="pl-10 h-12 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                  />
                </div>
              </div>

              {/* Passengers/Guests */}
              <div className="space-y-2">
                <Label htmlFor="passengers" className="text-sm font-medium text-gray-700">
                  {activeTab === "hoteis" ? "Hóspedes" : "Passageiros"}
                </Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Select>
                    <SelectTrigger className="pl-10 h-12 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]">
                      <SelectValue placeholder="1 adulto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 adulto</SelectItem>
                      <SelectItem value="2">2 adultos</SelectItem>
                      <SelectItem value="3">3 adultos</SelectItem>
                      <SelectItem value="4">4 adultos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Search Button for other tabs */}
          {activeTab !== "passagens" && (
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#1e3a8a] px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Buscar {activeTab === "hoteis" ? "Hotéis" : "Pacotes"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
