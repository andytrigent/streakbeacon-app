import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { SettingsDialog } from "@/components/settings-dialog";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Bar */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-5xl py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">🌟 StreakBeacon</h1>
            </div>
            <div className="flex items-center space-x-2">
              <ModeToggle />
              <SettingsDialog />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-5xl py-8">
        <div className="space-y-8">
          {/* Progress Section */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Your Progress</h2>
            <Card className="overflow-hidden border rounded-lg shadow-sm">
              <div className="h-48 flex items-center justify-center text-muted-foreground p-6">
                Streak Graph Coming Soon
              </div>
            </Card>
          </section>

          {/* Tasks Section */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Today&apos;s Tasks</h2>
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                <Plus className="h-4 w-4 mr-1.5" />
                Add Task
              </Button>
            </div>
            <Card className="overflow-hidden border rounded-lg shadow-sm">
              <div className="p-6">
                {/* Task Input (will be shown when Add Task is clicked) */}
                <div className="hidden">
                  {/* Task input form will go here */}
                </div>

                {/* Task List */}
                <div className="text-center text-muted-foreground py-8">
                  No tasks added yet. Click &quot;Add Task&quot; to get started!
                </div>
              </div>
            </Card>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="overflow-hidden border rounded-lg shadow-sm p-4">
              <h3 className="text-sm font-medium text-muted-foreground">Current Streak</h3>
              <p className="text-2xl font-bold mt-1">0 days</p>
            </Card>
            <Card className="overflow-hidden border rounded-lg shadow-sm p-4">
              <h3 className="text-sm font-medium text-muted-foreground">Tasks Completed</h3>
              <p className="text-2xl font-bold mt-1">0 / 0</p>
            </Card>
            <Card className="overflow-hidden border rounded-lg shadow-sm p-4">
              <h3 className="text-sm font-medium text-muted-foreground">Longest Streak</h3>
              <p className="text-2xl font-bold mt-1">0 days</p>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
