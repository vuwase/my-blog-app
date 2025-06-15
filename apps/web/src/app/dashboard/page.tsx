"use client"
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/utils/orpc";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data: stats, isLoading } = useQuery(orpc.posts.getStats.queryOptions());
  const { data: recentPosts } = useQuery(orpc.posts.getRecent.queryOptions());

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/students-banner.jpg")',
      }}
    >
      <div className="container mx-auto p-6 relative z-10 bg-background/95 min-h-screen backdrop-blur-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button asChild>
            <Link href="/posts/new">Create New Post</Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-32" />
            ))
          ) : (
            <>
              <Card className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground">Total Posts</h3>
                <p className="text-3xl font-bold">{stats?.totalPosts}</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
                <p className="text-3xl font-bold">{stats?.categoriesCount}</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground">Recent Activity</h3>
                <p className="text-3xl font-bold">{stats?.recentPostsCount}</p>
              </Card>
            </>
          )}
        </div>

        {/* Recent Posts */}
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <div className="grid gap-4">
          {recentPosts?.map((post) => (
            <Card key={post.id} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.category}</p>
                </div>
                <Button variant="outline" asChild>
                  <Link href={`/posts/${post.id}/edit`}>Edit</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
