import Header from "@/components/header"
import ProfileSettings from "@/components/settings/profile-settings"
import AccountSettings from "@/components/settings/account-settings"
import NotificationSettings from "@/components/settings/notification-settings"

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-white">Profile Settings</h1>
        <div className="space-y-8">
          <ProfileSettings />
          <AccountSettings />
          <NotificationSettings />
        </div>
      </div>
    </main>
  )
}

