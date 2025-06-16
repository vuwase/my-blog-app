import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, BookOpen, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Daily Blog</h1>
          <p className="text-xl text-muted-foreground">
            A platform where writers come together to share their stories and connect with readers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Built by writers, for writers. Join our growing community of storytellers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-lg font-semibold mb-2">Easy Publishing</h3>
              <p className="text-muted-foreground">Simple tools to write, edit, and publish your stories with ease.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-lg font-semibold mb-2">Made with Love</h3>
              <p className="text-muted-foreground">Crafted with passion to provide the best writing experience.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start your journey?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of writers who have already made Daily Blog their home.
          </p>
          <Link href="/signup">
            <Button size="lg">Get Started Today</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
