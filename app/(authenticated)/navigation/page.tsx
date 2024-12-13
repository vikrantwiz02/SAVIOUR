'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"
import Image from "next/image"

export default function NavigationAssistance() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Navigation Assistance</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video relative mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Map showing current location"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-red-500" />
              </div>
            </div>
            <p className="text-center">123 Main St, Anytown, USA</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nearest Safe Zones</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>City Community Center</span>
                <Button variant="outline" size="sm">
                  <Navigation className="h-4 w-4 mr-2" />
                  Navigate
                </Button>
              </li>
              <li className="flex items-center justify-between">
                <span>Central High School</span>
                <Button variant="outline" size="sm">
                  <Navigation className="h-4 w-4 mr-2" />
                  Navigate
                </Button>
              </li>
              <li className="flex items-center justify-between">
                <span>Memorial Hospital</span>
                <Button variant="outline" size="sm">
                  <Navigation className="h-4 w-4 mr-2" />
                  Navigate
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Turn-by-Turn Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video relative mb-4">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Navigation map"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="space-y-2">
            <p className="font-bold">Directions to City Community Center:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Head north on Main St toward 1st Ave</li>
              <li>Turn right onto Oak St</li>
              <li>Continue for 0.5 miles</li>
              <li>Turn left onto Park Rd</li>
              <li>Destination will be on your right</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}