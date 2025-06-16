"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function BlogHero() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/signup")
  }

  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to our daily blog post</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Access your personal workspace and manage your work efficiently
        </p>
        <Button
          size="lg"
          onClick={handleGetStarted}
          className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}
