import MainHeading from '../components/Shared/MainHeading'
import ExplorePropertiesClient from '../components/explore_Components/ExplorePropertiesClient'

export default function ExplorePropertiesPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-2 sm:px-3 lg:px-6 bg-background">
      <MainHeading
        title="Explore Properties Listed by Trusted Agents & Agencies"
        desc="Discover your next home from our network of verified real estate professionals"
      />
      {/* Move all interactive logic to client component */}
      <ExplorePropertiesClient />
    </div>
  )
}
