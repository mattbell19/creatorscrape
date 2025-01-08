import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccountSettings() {
  return (
    <Card className="bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-xl text-white">Account Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input id="email" type="email" defaultValue="evelyn@example.com" className="bg-zinc-800 border-zinc-700 text-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="current-password" className="text-white">Current Password</Label>
          <Input id="current-password" type="password" className="bg-zinc-800 border-zinc-700 text-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password" className="text-white">New Password</Label>
          <Input id="new-password" type="password" className="bg-zinc-800 border-zinc-700 text-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password" className="text-white">Confirm New Password</Label>
          <Input id="confirm-password" type="password" className="bg-zinc-800 border-zinc-700 text-white" />
        </div>
        <Button className="bg-[#CEFF00] text-black hover:bg-[#CEFF00]/90">Update Password</Button>
      </CardContent>
    </Card>
  )
}

