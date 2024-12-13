import Hero from '@/components/hero'
import FeatureCard from '@/components/feature-card'
import { AlertTriangle, Navigation, Users, WifiOff } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Stay safe with Saviour
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform provides essential tools and information to help you navigate through natural disasters.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}