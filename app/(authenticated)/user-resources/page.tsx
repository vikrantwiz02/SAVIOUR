'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Droplet, Utensils, Stethoscope, MapPin } from "lucide-react"

export default function ResourceAvailability() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Resource Availability</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Safety Kits</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50</div>
            <p className="text-xs text-muted-foreground">Available at City Hall</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Supply</CardTitle>
            <Droplet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1000 L</div>
            <p className="text-xs text-muted-foreground">At Community Center</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Food Rations</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">500</div>
            <p className="text-xs text-muted-foreground">Meals available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medical Supplies</CardTitle>
            <Stethoscope className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100</div>
            <p className="text-xs text-muted-foreground">First aid kits</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Nearby Resource Centers</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start justify-between">
              <div>
                <p className="font-semibold">City Hall</p>
                <p className="text-sm text-muted-foreground">123 Main St, Anytown, USA</p>
                <p className="text-sm">Safety kits, water, food</p>
              </div>
              <Button variant="outline" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                Directions
              </Button>
            </li>
            <li className="flex items-start justify-between">
              <div>
                <p className="font-semibold">Community Center</p>
                <p className="text-sm text-muted-foreground">456 Oak Ave, Anytown, USA</p>
                <p className="text-sm">Water, food, shelter</p>
              </div>
              <Button variant="outline" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                Directions
              </Button>
            </li>
            <li className="flex items-start justify-between">
              <div>
                <p className="font-semibold">Memorial Hospital</p>
                <p className="text-sm text-muted-foreground">789 Elm St, Anytown, USA</p>
                <p className="text-sm">Medical supplies, emergency care</p>
              </div>
              <Button variant="outline" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                Directions
              </Button>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Request Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="resource-type" className="block text-sm font-medium text-gray-700">
                Resource Type
              </label>
              <select id="resource-type" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>Safety Kit</option>
                <option>Water</option>
                <option>Food</option>
                <option>Medical Supplies</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input type="number" id="quantity" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <Button type="submit">Submit Request</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}