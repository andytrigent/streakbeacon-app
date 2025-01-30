import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="py-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your daily progress and maintain your streaks.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      {/* Placeholder for streak graph */}
      <div className="h-48 rounded-lg border bg-card p-6">
        <div className="h-full flex items-center justify-center text-muted-foreground">
          Streak Graph Coming Soon
        </div>
      </div>

      {/* Placeholder for today's tasks */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Today's Tasks</h2>
        <div className="text-center text-muted-foreground py-8">
          No tasks added yet. Click "Add Task" to get started!
        </div>
      </div>
    </div>
  );
} 