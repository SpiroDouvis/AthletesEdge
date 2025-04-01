"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login/signup logic here
    console.log(isLogin ? "Logging in" : "Signing up", { email, password, name })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 mb-4">
            <Image
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop"
              alt="Hockey Heroes Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <h1 className="hockey-title text-3xl md:text-4xl hockey-gradient mb-2">Hockey Heroes</h1>
          <p className="text-red-400 text-center">Training app for aspiring hockey players</p>
        </div>

        <div className="bg-zinc-900 rounded-lg p-6 shadow-lg border border-red-900">
          <div className="flex mb-6">
            <button
              className={`flex-1 py-2 text-center ${
                isLogin ? "text-red-500 border-b-2 border-red-500" : "text-red-400"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 text-center ${
                !isLogin ? "text-red-500 border-b-2 border-red-500" : "text-red-400"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-red-400">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required={!isLogin}
                  className="bg-zinc-800 border-red-900 text-red-100"
                />
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-red-400">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-zinc-800 border-red-900 text-red-100"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-red-400">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="bg-zinc-800 border-red-900 text-red-100"
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-sm text-red-400 hover:text-red-300">
                  Forgot password?
                </a>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white"
            >
              {isLogin ? "Login" : "Sign Up"} <ChevronRight className="ml-2" size={16} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

