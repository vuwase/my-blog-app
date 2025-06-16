"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, Edit, Trash2, ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"

interface Post {
  id: number
  title: string
  content: string
  date: string
  status: "draft" | "published"
}

export default function DashboardPage() {
  const [posts, setPosts] = React.useState<Post[]>([
    {
      id: 1,
      title: "My First Blog Post",
      content: "This is the content of my first blog post. It's a great start to my blogging journey!",
      date: "2024-01-15",
      status: "published",
    },
    {
      id: 2,
      title: "Learning Next.js",
      content: "Today I learned about Next.js and how to build modern web applications...",
      date: "2024-01-14",
      status: "draft",
    },
  ])

  const [isCreating, setIsCreating] = React.useState(false)
  const [editingPost, setEditingPost] = React.useState<Post | null>(null)
  const [formData, setFormData] = React.useState({ title: "", content: "" })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [success, setSuccess] = React.useState("")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      if (editingPost) {
        // Update existing post
        setPosts((prev) =>
          prev.map((post) =>
            post.id === editingPost.id ? { ...post, title: formData.title, content: formData.content } : post,
          ),
        )
        setSuccess("Post updated successfully!")
        setEditingPost(null)
      } else {
        // Create new post
        const newPost: Post = {
          id: Date.now(),
          title: formData.title,
          content: formData.content,
          date: new Date().toISOString().split("T")[0],
          status: "draft",
        }
        setPosts((prev) => [newPost, ...prev])
        setSuccess("Post created successfully!")
        setIsCreating(false)
      }

      setFormData({ title: "", content: "" })
      setTimeout(() => setSuccess(""), 3000)
    } catch (error) {
      setErrors({ general: "Something went wrong. Please try again." })
    }
  }

  const handleEdit = (post: Post) => {
    setEditingPost(post)
    setFormData({ title: post.title, content: post.content })
    setIsCreating(true)
  }

  const handleDelete = (postId: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId))
    setSuccess("Post deleted successfully!")
    setTimeout(() => setSuccess(""), 3000)
  }

  const handleCancel = () => {
    setIsCreating(false)
    setEditingPost(null)
    setFormData({ title: "", content: "" })
    setErrors({})
  }

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

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your blog posts and content</p>
        </div>
        {!isCreating && (
          <Button onClick={() => setIsCreating(true)}>
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        )}
      </div>

      {success && (
        <Alert className="mb-6 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-900">
          <AlertDescription className="text-green-800 dark:text-green-300">{success}</AlertDescription>
        </Alert>
      )}

      {isCreating && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{editingPost ? "Edit Post" : "Create New Post"}</CardTitle>
            <CardDescription>
              {editingPost ? "Update your blog post" : "Write and publish your thoughts"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.general && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.general}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  className={errors.title ? "border-destructive" : ""}
                  placeholder="Enter your post title..."
                />
                {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                  className={`min-h-[200px] ${errors.content ? "border-destructive" : ""}`}
                  placeholder="Write your post content..."
                />
                {errors.content && <p className="text-sm text-destructive">{errors.content}</p>}
              </div>

              <div className="flex gap-2">
                <Button type="submit">{editingPost ? "Update Post" : "Create Post"}</Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Posts ({posts.length})</h2>
        {posts.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">No posts yet. Create your first post to get started!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.status}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(post)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(post.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{post.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
