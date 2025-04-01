"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

type Message = {
  id: number
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function AiCoachPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hi there! I'm your Hockey AI Coach. How can I help improve your game today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Try focusing on your wrist shot technique. Keep your lower hand relaxed and follow through toward the target.",
        "Your skating stance looks good! Remember to keep your knees bent and weight centered over your skates.",
        "For better stickhandling, practice keeping your head up while controlling the puck. This will improve your game awareness.",
        "When practicing passing, focus on both the power and accuracy. A good pass should be firm but catchable.",
        "Don't forget to work on your off-ice conditioning too. Strong legs and core are essential for hockey players.",
      ]

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

      const aiMessage: Message = {
        id: messages.length + 2,
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="bg-zinc-900 p-4 border-b border-red-900">
        <h1 className="hockey-title text-xl">AI Hockey Coach</h1>
        <p className="text-red-400 text-sm">Get personalized training advice</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === "user" ? "bg-red-900 text-white" : "bg-zinc-800 text-red-100"
              }`}
            >
              {message.sender === "ai" && (
                <div className="flex items-center mb-2">
                  <div className="relative w-6 h-6 mr-2">
                    <Image
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop"
                      alt="AI Coach"
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-xs font-semibold text-red-400">Coach AI</span>
                </div>
              )}
              <p>{message.content}</p>
              <div className={`text-xs mt-1 ${message.sender === "user" ? "text-red-200" : "text-red-400"}`}>
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t border-red-900 bg-zinc-900">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your coach a question..."
            className="bg-zinc-800 border-red-900 text-red-100"
          />
          <Button type="submit" size="icon" className="bg-red-700 hover:bg-red-600">
            <Send size={18} />
          </Button>
        </div>
      </form>
    </div>
  )
}

