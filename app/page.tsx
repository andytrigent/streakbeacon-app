import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
      <div className="space-y-6 max-w-3xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Shine a light on your progress
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Stay consistent, stay unstoppable! Track your daily tasks and build lasting habits with our intuitive streak-based system.
        </p>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Start Tracking
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-2 bg-primary/10 rounded-full">
            📊
          </div>
          <h3 className="text-xl font-semibold">Visual Progress</h3>
          <p className="text-sm text-muted-foreground text-center">
            Track your consistency with our GitHub-style contribution graph
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-2 bg-primary/10 rounded-full">
            🎯
          </div>
          <h3 className="text-xl font-semibold">Stay Focused</h3>
          <p className="text-sm text-muted-foreground text-center">
            Organize tasks by categories and prioritize what matters
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-2 bg-primary/10 rounded-full">
            🔒
          </div>
          <h3 className="text-xl font-semibold">Privacy First</h3>
          <p className="text-sm text-muted-foreground text-center">
            All your data stays local - no account needed
          </p>
        </div>
      </div>
    </div>
  );
}
