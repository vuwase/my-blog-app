import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function RecentPosts() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Modern Web Development",
      excerpt: "Learn the fundamentals of building modern web applications with the latest technologies.",
      author: "John Doe",
      date: "2024-01-15",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Future of Remote Work",
      excerpt: "Exploring how remote work is changing the landscape of modern employment.",
      author: "Jane Smith",
      date: "2024-01-14",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Building Better User Experiences",
      excerpt: "Tips and strategies for creating user-centered design that actually works.",
      author: "Mike Johnson",
      date: "2024-01-13",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Recent Posts</h2>
          <p className="text-gray-600">Check out our latest articles and insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4">
                  <Link href={`/posts/${post.id}`}>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/posts">
            <Button size="lg">View All Posts</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
