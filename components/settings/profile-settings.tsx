"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera } from 'lucide-react'
import Image from "next/image"

export default function ProfileSettings() {
  const [profileImage, setProfileImage] = useState("/placeholder.svg")

  return (
    <Card className="bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-xl text-white">Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src={profileImage}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Button
              size="icon"
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-[#CEFF00] text-black hover:bg-[#CEFF00]/90"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
            Change Photo
          </Button>
        </div>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">Name</Label>
          <Input id="name" defaultValue="Evelyn Munoz" className="bg-zinc-800 border-zinc-700 text-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username" className="text-white">Username</Label>
          <Input id="username" defaultValue="@evelyn_munoz" className="bg-zinc-800 border-zinc-700 text-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio" className="text-white">Bio</Label>
          <Textarea
            id="bio"
            defaultValue="Lifestyle influencer passionate about sustainable living and mindful travel."
            className="bg-zinc-800 border-zinc-700 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website" className="text-white">Website</Label>
          <Input id="website" defaultValue="https://evelynmunoz.com" className="bg-zinc-800 border-zinc-700 text-white" />
        </div>
        <Button className="bg-[#CEFF00] text-black hover:bg-[#CEFF00]/90">Save Changes</Button>
      </CardContent>
    </Card>
  )
}

