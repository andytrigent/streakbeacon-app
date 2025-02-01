"use client"

import { useState } from "react"
import { Download, Moon, Sun } from "lucide-react"

export default function Settings({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Implement dark mode toggle logic here
  }

  const downloadData = () => {
    // Implement data download logic here
    console.log("Downloading data...")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <button
            onClick={downloadData}
            className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            <Download className="w-5 h-5" />
            <span>Download All Data</span>
          </button>
          {/* Add more settings options here */}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white p-2 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  )
}

