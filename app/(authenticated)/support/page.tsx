'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, MessageSquare, HandHeart } from "lucide-react"

export default function UserSupport() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User-to-User Support</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 mr-2" />
              Support Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">Need transportation to shelter</p>
                  <p className="text-sm text-muted-foreground">2.5 km away • Posted 15 minutes ago</p>
                </div>
                <Button>Offer Help</Button>
              </li>
              <li  className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">Medical assistance required</p>
                  <p className="text-sm text-muted-foreground">1.8 km away • Posted 30 minutes ago</p>
                </div>
                <Button>Offer Help</Button>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">Food and water needed</p>
                  <p className="text-sm text-muted-foreground">3.2 km away • Posted 1 hour ago</p>
                </div>
                <Button>Offer Help</Button>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HandHeart className="h-6 w-6 mr-2" />
              Offer Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="support-type" className="block text-sm font-medium text-gray-700">
                  Type of Support
                </label>
                <Input id="support-type" placeholder="e.g., Transportation, Food, Medical" />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <Textarea id="description" placeholder="Describe the support you can offer..." />
              </div>
              <Button type="submit">Submit Offer</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="h-6 w-6 mr-2" />
            Community Chat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted p-3 rounded-lg">
              <p className="font-semibold">John Doe</p>
              <p>I have extra blankets and warm clothes if anyone needs them.</p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <p className="font-semibold">Jane Smith</p>
              <p>Can someone help me board up my windows before the storm hits?</p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <p className="font-semibold">Mike Johnson</p>
              <p>I'm a nurse and available to provide medical assistance if needed.</p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Input placeholder="Type your message..." className="flex-grow" />
            <Button>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}