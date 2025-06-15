import PostForm from "@/components/post-form";

export default function NewPostPage() {
  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
      <PostForm mode="create" />
    </div>
  );
}
