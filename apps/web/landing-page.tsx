import { Book, Edit3, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-16">
          {/* Documentation Card */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Documentation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Access comprehensive guides and documentation</p>
            </CardContent>
          </Card>

          {/* Quick Start Card */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Edit3 className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Start</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Get up and running with our quick start guide</p>
            </CardContent>
          </Card>

          {/* Support Card */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Get help from our support team when you need it</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Section */}
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Join thousands of users who are already using our platform to manage their work efficiently.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8">
              Sign In
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Avatar */}
      <div className="absolute bottom-6 left-6">
        <Avatar className="w-10 h-10 bg-gray-800">
          <AvatarFallback className="bg-gray-800 text-white font-medium">N</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
