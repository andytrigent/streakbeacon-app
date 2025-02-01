"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Settings } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Card } from "./ui/card";

export function SettingsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Open settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Customize your StreakBeacon experience
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium">Theme</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred theme
                </p>
              </div>
              <ModeToggle />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium">Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  Configure notification preferences
                </p>
              </div>
              <Button variant="outline" disabled size="sm">Coming Soon</Button>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium">Data Management</h3>
                <p className="text-sm text-muted-foreground">
                  Export or reset your data
                </p>
              </div>
              <Button variant="outline" disabled size="sm">Coming Soon</Button>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
} 