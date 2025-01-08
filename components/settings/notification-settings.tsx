import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotificationSettings() {
  return (
    <Card className="bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-xl text-white">Notification Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="email-notifications" className="text-white">Email Notifications</Label>
          <Switch id="email-notifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="push-notifications" className="text-white">Push Notifications</Label>
          <Switch id="push-notifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="message-notifications" className="text-white">Message Notifications</Label>
          <Switch id="message-notifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="marketing-emails" className="text-white">Marketing Emails</Label>
          <Switch id="marketing-emails" />
        </div>
      </CardContent>
    </Card>
  )
}

