"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MessageSquare, ThumbsUp, Send } from "lucide-react"

type Post = {
  id: number
  user: {
    name: string
    avatar: string
  }
  content: string
  timestamp: Date
  likes: number
  comments: number
  hasLiked: boolean
}

export default function CommunityPage() {
  const [newPost, setNewPost] = useState("")
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop",
      },
      content:
        "Just finished my first training session with the app! Already seeing improvement in my stickhandling 🏒",
      timestamp: new Date(Date.now() - 3600000 * 2), // 2 hours ago
      likes: 12,
      comments: 3,
      hasLiked: false,
    },
    {
      id: 2,
      user: {
        name: "Sam Williams",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop",
      },
      content:
        "Anyone want to meet up at the local rink this weekend for some practice? I'm trying to work on my slapshot technique.",
      timestamp: new Date(Date.now() - 3600000 * 5), // 5 hours ago
      likes: 8,
      comments: 7,
      hasLiked: true,
    },
    {
      id: 3,
      user: {
        name: "Jordan Lee",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
      },
      content:
        "Just redeemed my first reward - a new hockey stick! Can't wait to try it out at practice tomorrow. Thanks Hockey Heroes! 🏆",
      timestamp: new Date(Date.now() - 3600000 * 24), // 1 day ago
      likes: 24,
      comments: 5,
      hasLiked: false,
    },
  ])

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newPost.trim()) return

    const post: Post = {
      id: Date.now(),
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: newPost,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      hasLiked: false,
    }

    setPosts([post, ...posts])
    setNewPost("")
  }

  const toggleLike = (postId: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const hasLiked = !post.hasLiked
          return {
            ...post,
            hasLiked,
            likes: hasLiked ? post.likes + 1 : post.likes - 1,
          }
        }
        return post
      }),
    )
  }

  const formatTimestamp = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      return "Just now"
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`
    } else {
      return `${Math.floor(diffInHours / 24)}d ago`
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="hockey-title text-2xl md:text-3xl mb-6">Community</h1>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Share with the community</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePostSubmit}>
            <div className="flex gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop"
                  alt="Your avatar"
                  fill
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <Input
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="Share your hockey journey..."
                  className="bg-zinc-800 border-red-900 text-red-100 mb-2"
                />
                <div className="flex justify-end">
                  <Button type="submit" className="bg-red-700 hover:bg-red-600">
                    Post <Send size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src={post.user.avatar || "/placeholder.svg"}
                    alt={post.user.name}
                    fill
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-red-300">{post.user.name}</h3>
                    <span className="text-xs text-red-400">{formatTimestamp(post.timestamp)}</span>
                  </div>
                  <p className="text-red-100 mb-3">{post.content}</p>
                  <div className="flex gap-4">
                    <button
                      className={`flex items-center gap-1 text-sm ${post.hasLiked ? "text-red-500" : "text-red-400"}`}
                      onClick={() => toggleLike(post.id)}
                    >
                      <ThumbsUp size={16} /> {post.likes}
                    </button>
                    <button className="flex items-center gap-1 text-sm text-red-400">
                      <MessageSquare size={16} /> {post.comments}
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

