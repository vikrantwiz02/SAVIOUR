'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import  Badge  from "@/components/ui/badge"
import { Search, MapPin, Package, Pill, Apple, Droplet } from 'lucide-react'

type Resource = {
  id: number
  type: 'Safety Kit' | 'Medical Supplies' | 'Food' | 'Water'
  location: string
  quantity: number
  lastUpdated: string
}

const resourceIcons = {
  'Safety Kit': Package,
  'Medical Supplies': Pill,
  'Food': Apple,
  'Water': Droplet,
}

const resourceColors = {
  'Safety Kit': 'bg-orange-100 text-orange-800',
  'Medical Supplies': 'bg-red-100 text-red-800',
  'Food': 'bg-green-100 text-green-800',
  'Water': 'bg-blue-100 text-blue-800',
}

export default function ResourceAvailabilityPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string | null>(null)

  useEffect(() => {
    // Simulating real-time updates
    const fetchResources = () => {
      const mockResources: Resource[] = [
        { id: 1, type: 'Safety Kit', location: 'City Hall', quantity: 50, lastUpdated: new Date().toISOString() },
        { id: 2, type: 'Medical Supplies', location: 'Central Hospital', quantity: 100, lastUpdated: new Date().toISOString() },
        { id: 3, type: 'Food', location: 'Community Center', quantity: 200, lastUpdated: new Date().toISOString() },
        { id: 4, type: 'Water', location: 'Fire Station', quantity: 500, lastUpdated: new Date().toISOString() },
        { id: 5, type: 'Safety Kit', location: 'Police Station', quantity: 30, lastUpdated: new Date().toISOString() },
        { id: 6, type: 'Medical Supplies', location: 'Pharmacy', quantity: 75, lastUpdated: new Date().toISOString() },
        { id: 7, type: 'Food', location: 'School Cafeteria', quantity: 150, lastUpdated: new Date().toISOString() },
        { id: 8, type: 'Water', location: 'Park', quantity: 300, lastUpdated: new Date().toISOString() },
      ]
      setResources(mockResources)
    }

    fetchResources()
    const interval = setInterval(fetchResources, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const filteredResources = resources.filter(resource => 
    (resource.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
     resource.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!selectedType || resource.type === selectedType)
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">Resource Availability Information</h1>
        
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" />
            <Input
              type="text"
              placeholder="Search resources or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-indigo-200 focus:border-indigo-400 focus:ring-indigo-400"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {['Safety Kit', 'Medical Supplies', 'Food', 'Water'].map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(selectedType === type ? null : type)}
                className={`${
                  selectedType === type 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'text-indigo-600 border-indigo-300 hover:bg-indigo-50'
                }`}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const Icon = resourceIcons[resource.type]
            return (
              <Card key={resource.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <div className={`h-2 ${resourceColors[resource.type].split(' ')[0]}`} />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className={`text-sm font-medium ${resourceColors[resource.type].split(' ')[1]}`}>
                    {resource.type}
                  </CardTitle>
                  <Icon className={`h-5 w-5 ${resourceColors[resource.type].split(' ')[1]}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-800">{resource.quantity}</div>
                  <p className="text-sm text-gray-600 mt-1">
                    Available at {resource.location}
                  </p>
                  <div className="mt-4 flex items-center">
                    <MapPin className="h-4 w-4 text-indigo-400 mr-1" />
                    <span className="text-sm text-indigo-600">{resource.location}</span>
                  </div>
                  <div className="mt-2">
                    <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-800">
                      Last updated: {new Date(resource.lastUpdated).toLocaleTimeString()}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredResources.length === 0 && (
          <p className="text-center text-indigo-500 mt-8 text-lg">No resources found matching your criteria.</p>
        )}
      </div>
    </div>
  )
}