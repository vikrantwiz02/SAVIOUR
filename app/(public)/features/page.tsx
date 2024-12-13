import FeatureCard from '@/components/feature-card'
import { AlertTriangle, Navigation, Users, WifiOff, Map, Battery, Shield, Zap } from 'lucide-react'

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to stay safe
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Saviour provides a comprehensive set of features to help you before, during, and after natural disasters.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<AlertTriangle className="h-6 w-6" />}
              title="Real-time Alerts"
              description="Receive instant notifications about natural disasters and safety instructions."
            />
            <FeatureCard
              icon={<Navigation className="h-6 w-6" />}
              title="Navigation Assistance"
              description="Get turn-by-turn directions to the nearest safe zone or shelter."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="User-to-User Support"
              description="Connect with others to offer or receive help during crises."
            />
            <FeatureCard
              icon={<WifiOff className="h-6 w-6" />}
              title="Offline Communication"
              description="Stay connected even when internet services are down."
            />
            <FeatureCard
              icon={<Map className="h-6 w-6" />}
              title="Interactive Maps"
              description="View real-time information about affected areas, shelters, and resources."
            />
            <FeatureCard
              icon={<Battery className="h-6 w-6" />}
              title="Power Saving Mode"
              description="Extend your device's battery life during emergencies."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Emergency Preparedness"
              description="Access guides and checklists to prepare for various types of disasters."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Quick SOS"
              description="Send your location and status to emergency contacts with one tap."
            />
          </div>
        </div>
      </div>
    </div>
  )
}