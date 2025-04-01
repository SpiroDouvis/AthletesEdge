import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const drills = [
  {
    id: 1,
    title: "Stickhandling Basics",
    description: "Master the fundamentals of puck control",
    duration: "15 min",
    level: "Beginner",
    points: 50,
    image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Shooting Accuracy",
    description: "Improve your shooting precision with target practice",
    duration: "20 min",
    level: "Intermediate",
    points: 75,
    image: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Skating Agility",
    description: "Enhance your speed and maneuverability on ice",
    duration: "25 min",
    level: "Intermediate",
    points: 100,
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Passing Relay",
    description: "Practice quick and accurate passing techniques",
    duration: "15 min",
    level: "Beginner",
    points: 50,
    image: "https://images.unsplash.com/photo-1518093606879-4c347a293f31?q=80&w=2060&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Defensive Positioning",
    description: "Learn proper defensive stance and positioning",
    duration: "30 min",
    level: "Advanced",
    points: 125,
    image: "https://images.unsplash.com/photo-1565108140991-e2cc4e0b3723?q=80&w=2070&auto=format&fit=crop",
  },
]

export default function DrillsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="hockey-title text-2xl md:text-3xl mb-6">Training Drills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {drills.map((drill) => (
          <Card key={drill.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={drill.image || "/placeholder.svg"} alt={drill.title} fill className="object-cover" />
              <div className="absolute top-2 right-2 bg-black/70 text-red-500 px-2 py-1 rounded text-sm">
                {drill.points} pts
              </div>
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{drill.title}</CardTitle>
                <span className="text-xs px-2 py-1 bg-red-900/50 rounded-full text-red-300">{drill.level}</span>
              </div>
              <CardDescription>{drill.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-red-400 text-sm">{drill.duration}</span>
                <button className="bg-red-800 hover:bg-red-700 text-white px-4 py-1 rounded-full text-sm">
                  Start Drill
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

