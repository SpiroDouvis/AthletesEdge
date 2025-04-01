"use client"

import { Home, Dumbbell, MessageSquare, Gift, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-red-900">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className={`flex flex-col items-center ${isActive("/") ? "text-red-500" : "text-red-400"}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          href="/drills"
          className={`flex flex-col items-center ${isActive("/drills") ? "text-red-500" : "text-red-400"}`}
        >
          <Dumbbell size={24} />
          <span className="text-xs mt-1">Drills</span>
        </Link>
        <Link
          href="/ai-coach"
          className={`flex flex-col items-center ${isActive("/ai-coach") ? "text-red-500" : "text-red-400"}`}
        >
          <MessageSquare size={24} />
          <span className="text-xs mt-1">AI Coach</span>
        </Link>
        <Link
          href="/rewards"
          className={`flex flex-col items-center ${isActive("/rewards") ? "text-red-500" : "text-red-400"}`}
        >
          <Gift size={24} />
          <span className="text-xs mt-1">Rewards</span>
        </Link>
        <Link
          href="/community"
          className={`flex flex-col items-center ${isActive("/community") ? "text-red-500" : "text-red-400"}`}
        >
          <Users size={24} />
          <span className="text-xs mt-1">Community</span>
        </Link>
      </div>
    </div>
  )
}

