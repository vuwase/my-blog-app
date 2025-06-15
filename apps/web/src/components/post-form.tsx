"use client"
import { useForm } from "@tanstack/react-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { orpc } from "@/utils/orpc";
import { useRouter } from "next/navigation";
import z from "zod";

const categories = ["Tech", "Lifestyle", "Work", "Other"] as const;

interface PostFormProps {
  initialData?: {
    id: string;
    title: string;
    content: string;
    category: string;
  };
  mode: "create" | "edit";
}

export default function PostForm({ initialData, mode }: PostFormProps) {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      title: initialData?.title ?? "",
      content: initialData?.content ?? "",
      category: initialData?.category ?? "Other",
    },
    onSubmit: async ({ value }) => {
      if (mode === "create") {
        await orpc.posts.create.mutate(value, {
          onSuccess: () => {
            router.push("/dashboard");
            toast.success("Post created successfully");
          },
          onError: (error) => {
            toast.error(error.message);
          },
        });
      } else {
        await orpc.posts.update.mutate(
          { id: initialData!.id, ...value },
          {
            onSuccess: () => {
              router.push("/dashboard");
              toast.success("Post updated successfully");
            },
            onError: (error) => {
              toast.error(error.message);
            },
          }
        );
      }
    },
    validators: {
      onSubmit: z.object({
        title: z.string().min(1, "Title is required"),
        content: z.string().min(1, "Content is required"),
        category: z.enum(categories),
      }),
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void form.handleSubmit();
      }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <Label>Title</Label>
        <form.Field name="title">
          {(field) => (
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
      </div>

      <div className="space-y-2">
        <Label>Category</Label>
        <form.Field name="category">
          {(field) => (
            <Select
              value={field.state.value}
              onValueChange={field.handleChange}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </form.Field>
      </div>

      <div className="space-y-2">
        <Label>Content</Label>
        <form.Field name="content">
          {(field) => (
            <Textarea
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="min-h-[200px]"
            />
          )}
        </form.Field>
      </div>

      <form.Subscribe>
        {(state) => (
          <Button
            type="submit"
            className="w-full"
            disabled={!state.canSubmit || state.isSubmitting}
          >
            {state.isSubmitting
              ? "Saving..."
              : mode === "create"
              ? "Create Post"
              : "Update Post"}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}
