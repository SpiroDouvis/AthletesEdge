import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const rewards = [
  {
    id: 1,
    title: "Hockey Jersey",
    description: "Official team jersey in your size",
    points: 5000,
    image: "https://images.unsplash.com/photo-1551701113-60eec9564876?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Hockey Stick",
    description: "Professional-grade hockey stick",
    points: 3500,
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Training Pucks (Set of 6)",
    description: "Official weight and size training pucks",
    points: 1200,
    image: "https://images.unsplash.com/photo-1486128105845-91daff43f404?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Hockey Gloves",
    description: "Protective gloves for practice and games",
    points: 2800,
    image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Water Bottle",
    description: "Insulated team water bottle",
    points: 800,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1936&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Training Session",
    description: "One-on-one training with a coach",
    points: 4500,
    image: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?q=80&w=1974&auto=format&fit=crop",
  },
]

export default function RewardsPage() {
  // Mock user points
  const userPoints = 2500

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="hockey-title text-2xl md:text-3xl">Rewards Shop</h1>
        <div className="bg-red-900/50 px-4 py-2 rounded-full">
          <span className="text-red-100">Your Points: </span>
          <span className="font-bold text-red-300">{userPoints}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rewards.map((reward) => {
          const canAfford = userPoints >= reward.points

          return (
            <Card key={reward.id} className={`overflow-hidden ${!canAfford ? "opacity-70" : ""}`}>
              <div className="relative h-48 w-full">
                <Image src={reward.image || "/placeholder.svg"} alt={reward.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-black/70 text-red-500 px-2 py-1 rounded text-sm font-bold">
                  {reward.points} pts
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{reward.title}</CardTitle>
                <CardDescription>{reward.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className={`w-full ${canAfford ? "bg-red-700 hover:bg-red-600" : "bg-zinc-700 cursor-not-allowed"}`}
                  disabled={!canAfford}
                >
                  {canAfford ? "Redeem Reward" : "Not Enough Points"}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

