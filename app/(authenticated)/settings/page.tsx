'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import  Label  from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <Switch id="push-notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
              <Switch id="sms-notifications" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Location Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="location-sharing">Share Location</Label>
              <Switch id="location-sharing" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="home-address">Home Address</Label>
              <Input id="home-address" placeholder="123 Main St, Anytown, USA" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Offline Mode</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="offline-mode" className="text-base">Enable Offline Mode</Label>
                <p className="text-sm text-muted-foreground">Download essential data for offline use</p>
              </div>
              <Switch id="offline-mode" />
            </div>
            <Button variant="outline">Manage Offline Data</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}