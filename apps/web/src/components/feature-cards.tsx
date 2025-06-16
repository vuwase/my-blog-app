import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Edit3, Users } from "lucide-react"

export function FeatureCards() {
  const features = [
    {
      icon: BookOpen,
      title: "Read Stories",
      description: "Discover amazing stories from writers around the world",
    },
    {
      icon: Edit3,
      title: "Write Posts",
      description: "Share your thoughts and experiences with our community",
    },
    {
      icon: Users,
      title: "Connect",
      description: "Engage with other writers and build your network",
    },
  ]

  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
