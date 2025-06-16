export interface Post {
  id: number
  title: string
  content: string
  date: string
  status: "draft" | "published"
  author?: string
  excerpt?: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface PostFormData {
  title: string
  content: string
}
