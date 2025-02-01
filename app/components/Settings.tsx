"use client"

import { useState, useEffect, useContext } from "react"
import { Download, Moon, Sun, HelpCircle } from "lucide-react"
import { type FirebaseConfig, initFirebase } from "@/lib/firebase"
import { FirebaseContext } from "@/app/(client)/FirebaseProvider"

const FIREBASE_FIELD_DESCRIPTIONS: Record<keyof FirebaseConfig, string> = {
  apiKey: "The API key from your Firebase project settings",
  authDomain: "The authentication domain for your Firebase project",
  projectId: "The unique identifier for your Firebase project",
  storageBucket: "The storage bucket URL for your Firebase project",
  messagingSenderId: "The messaging sender ID for Firebase Cloud Messaging",
  appId: "The application ID assigned by Firebase"
}

export default function Settings({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { isReady, config: savedConfig, reinitialize } = useContext(FirebaseContext)
  const [firebaseConfig, setFirebaseConfig] = useState<FirebaseConfig>(() => savedConfig || {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  })
  const [configError, setConfigError] = useState<string>("")
  const [testStatus, setTestStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'checking'>('checking')

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

  const testFirebaseConnection = async () => {
    const requiredFields = Object.keys(firebaseConfig) as (keyof FirebaseConfig)[]
    const emptyFields = requiredFields.filter(field => !firebaseConfig[field])
    
    if (emptyFields.length > 0) {
      setTestStatus({ type: 'error', message: `Missing required fields: ${emptyFields.join(", ")}` })
      setConnectionStatus('disconnected')
      return
    }

    setConnectionStatus('checking')
    try {
      initFirebase(firebaseConfig)
      setTestStatus({ type: 'success', message: 'Firebase connection successful!' })
      setConnectionStatus('connected')
    } catch (error) {
      setTestStatus({ type: 'error', message: error instanceof Error ? error.message : 'Failed to connect to Firebase' })
      setConnectionStatus('disconnected')
    }
  }

  const saveFirebaseConfiguration = async () => {
    try {
      localStorage.setItem('firebaseConfig', JSON.stringify(firebaseConfig))
      setConfigError("")
      reinitialize()
      setTestStatus({ type: 'success', message: 'Firebase configuration saved successfully!' })
      setConnectionStatus('connected')
    } catch (error) {
      setConfigError(error instanceof Error ? error.message : 'Failed to save Firebase configuration')
      setConnectionStatus('disconnected')
    }
  }

  const resetFirebaseConfiguration = () => {
    localStorage.removeItem('firebaseConfig')
    setFirebaseConfig({
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    })
    setConnectionStatus('disconnected')
    setTestStatus(null)
    setConfigError("")
  }

  // Update local state when global config changes
  useEffect(() => {
    if (savedConfig) {
      setFirebaseConfig(savedConfig)
      setConnectionStatus('connected')
    }
  }, [savedConfig])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-[32rem] max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Settings</h2>
        
        <button
          className="w-full mb-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          onClick={() => document.getElementById('firebase-config-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {isReady ? '✓ Firebase Configured' : '⚙️ Configure Firebase'}
        </button>

        <div className="space-y-6">
          <div id="firebase-config-section" className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">Firebase Configuration</h3>
              {connectionStatus === 'connected' || isReady ? (
                <span className="text-sm text-green-500">Connected ✓</span>
              ) : connectionStatus === 'checking' ? (
                <span className="text-sm text-yellow-500">Checking...</span>
              ) : (
                <span className="text-sm text-red-500">(Setup Required)</span>
              )}
            </div>

            {/* Firebase configuration form */}
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
                      <div className="flex items-center gap-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <div className="group relative">
                          <HelpCircle className="w-4 h-4 text-gray-400" />
                          <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap">
                            {FIREBASE_FIELD_DESCRIPTIONS[field as keyof FirebaseConfig]}
                          </div>
                        </div>
                      </div>
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

                {testStatus && (
                  <div className={`text-sm mt-2 ${testStatus.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {testStatus.message}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <button
                      onClick={saveFirebaseConfiguration}
                      className="flex-1 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 font-semibold"
                    >
                      Save Configuration
                    </button>
                    <button
                      onClick={testFirebaseConnection}
                      disabled={connectionStatus === 'checking'}
                      className="flex-1 bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 font-medium disabled:opacity-50"
                    >
                      {connectionStatus === 'checking' ? 'Testing...' : 'Test Connection (Optional)'}
                    </button>
                  </div>
                  <button
                    onClick={resetFirebaseConfiguration}
                    className="w-full bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400 p-2 rounded-md hover:bg-red-200 dark:hover:bg-red-900/30 font-medium"
                  >
                    Reset Configuration
                  </button>
                </div>
              </div>
            
          </div>

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

