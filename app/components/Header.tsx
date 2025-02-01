"use client"

import { useState } from "react"
import { Settings } from "lucide-react"
import SettingsComponent from "@/app/components/Settings"

export default function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const motivationalMessage = "Loading motivation..."

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Beacon</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">{new Date().toDateString()}</p>
          </div>
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Settings className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 italic">{motivationalMessage}</p>
      </div>
      <SettingsComponent isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </header>
  )
}

