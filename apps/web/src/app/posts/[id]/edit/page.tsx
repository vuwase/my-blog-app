"use client"
import PostForm from "@/components/post-form";
import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/utils/orpc";
import { Skeleton } from "@/components/ui/skeleton";

export default function EditPostPage({ params }: { params: { id: string } }) {
  const { data: post, isLoading } = useQuery(
    orpc.posts.getById.queryOptions(params.id)
  );

  if (isLoading) {
    return <Skeleton className="h-[500px]" />;
  }

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Edit Post</h1>
      <PostForm mode="edit" initialData={post} />
    </div>
  );
}
