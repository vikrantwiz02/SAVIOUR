'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Info } from "lucide-react"

export default function Alerts() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Real-time Alerts</h1>
      <div className="grid gap-6">
        <Card className="border-red-500">
          <CardHeader className="flex flex-row items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <CardTitle>Flash Flood Warning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">A flash flood warning is in effect for your area. Take immediate action:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Move to higher ground immediately</li>
              <li>Do not walk, swim, or drive through flood waters</li>
              <li>Stay inside and monitor local news for updates</li>
            </ul>
            <Button>View Evacuation Routes</Button>
          </CardContent>
        </Card>
        <Card className="border-yellow-500">
          <CardHeader className="flex flex-row items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
            <CardTitle>Severe Thunderstorm Watch</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">A severe thunderstorm watch is in effect until 9:00 PM. Be prepared for:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Strong winds</li>
              <li>Heavy rainfall</li>
              <li>Possible hail</li>
            </ul>
            <Button>View Safety Tips</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center space-x-2">
            <Info className="h-6 w-6 text-blue-500" />
            <CardTitle>Earthquake Advisory</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">A minor earthquake was detected in your region. No immediate action is required, but stay informed:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Magnitude: 3.5</li>
              <li>Depth: 10km</li>
              <li>No tsunami threat</li>
            </ul>
            <Button>View Seismic Activity Map</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}