"use client"

import { useState, useEffect } from "react"
import { initFirebase } from "@/lib/firebase"
import { Download, Moon, Sun, ChevronDown, ChevronUp } from "lucide-react"
import { type FirebaseConfig } from "@/lib/firebase"

export default function Settings({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showFirebaseSetup, setShowFirebaseSetup] = useState(false)
  const [firebaseConfig, setFirebaseConfig] = useState<FirebaseConfig>({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  })
  const [configError, setConfigError] = useState<string>("")

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const downloadData = () => {
    console.log("Downloading data...")
  }

  const handleFirebaseConfigChange = (field: keyof FirebaseConfig, value: string) => {
    setFirebaseConfig(prev => ({ ...prev, [field]: value }))
    setConfigError("")
  }

  const validateAndSaveConfig = async () => {
    const requiredFields = Object.keys(firebaseConfig) as (keyof FirebaseConfig)[]
    const emptyFields = requiredFields.filter(field => !firebaseConfig[field])
    
    if (emptyFields.length > 0) {
      setConfigError(`Missing required fields: ${emptyFields.join(", ")}`)
      return
    }

    try {
      initFirebase(firebaseConfig)
      localStorage.setItem('firebaseConfig', JSON.stringify(firebaseConfig))
      setConfigError("")
      setShowFirebaseSetup(false)
    } catch (error) {
      setConfigError(error instanceof Error ? error.message : 'Failed to initialize Firebase')
    }
  }

  // Load saved config on mount
  useEffect(() => {
    const savedConfig = localStorage.getItem('firebaseConfig')
    if (savedConfig) {
      try {
        const config = JSON.parse(savedConfig)
        setFirebaseConfig(config)
        initFirebase(config)
      } catch (error) {
        console.error('Failed to load saved Firebase config:', error)
      }
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-[32rem] max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Settings</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            <button
              onClick={() => setShowFirebaseSetup(!showFirebaseSetup)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-lg font-semibold">Firebase Configuration</span>
              {showFirebaseSetup ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {showFirebaseSetup && (
              <div className="mt-4 space-y-6">
                <div className="prose dark:prose-invert text-sm">
                  <h4>Setup Instructions:</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Go to the Firebase Console (console.firebase.google.com)</li>
                    <li>Create a new project or select an existing one</li>
                    <li>Click on the web icon (&lt;/&gt;) to add a web app</li>
                    <li>Register your app and copy the configuration</li>
                    <li>Paste the values in the fields below</li>
                  </ol>
                </div>

                <div className="space-y-4">
                  {Object.keys(firebaseConfig).map((field) => (
                    <div key={field} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type="text"
                        value={firebaseConfig[field as keyof FirebaseConfig]}
                        onChange={(e) => handleFirebaseConfigChange(field as keyof FirebaseConfig, e.target.value)}
                        className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder={`Enter your ${field}`}
                      />
                    </div>
                  ))}
                </div>

                {configError && (
                  <div className="text-red-500 text-sm mt-2">{configError}</div>
                )}

                <button
                  onClick={validateAndSaveConfig}
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Validate & Save Configuration
                </button>
              </div>
            )}
          </div>

          <button
            onClick={downloadData}
            className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            <Download className="w-5 h-5" />
            <span>Download All Data</span>
          </button>
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

