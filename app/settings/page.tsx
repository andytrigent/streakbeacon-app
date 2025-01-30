import { ModeToggle } from "@/components/mode-toggle";

export default function SettingsPage() {
  return (
    <div className="py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your preferences and customize your experience.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Appearance</h2>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Theme</label>
              <p className="text-sm text-muted-foreground">
                Customize how StreakBeacon looks on your device.
              </p>
            </div>
            <ModeToggle />
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <p className="text-sm text-muted-foreground">
            Coming soon: Configure your notification preferences.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Data Management</h2>
          <p className="text-sm text-muted-foreground">
            Coming soon: Export or reset your data.
          </p>
        </div>
      </div>
    </div>
  );
} 