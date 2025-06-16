import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"

const samplePosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js and React.",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the web.",
    author: "Jane Smith",
    date: "2024-01-14",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Building Better User Experiences",
    excerpt: "Tips and strategies for creating user-centered design.",
    author: "Mike Johnson",
    date: "2024-01-13",
    readTime: "6 min read",
  },
]

export default function PostsPage() {
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

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Posts</h1>
        <p className="text-muted-foreground">Discover amazing stories from our community</p>
      </div>

      <div className="grid gap-6">
        {samplePosts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <span>{post.readTime}</span>
              </div>
            </CardHeader>
            <CardContent>
              <Link href={`/posts/${post.id}`}>
                <Button>Read More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
