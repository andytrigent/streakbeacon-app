"use client"

import { createContext, useEffect, useState, ReactNode } from "react"
import { initFirebase, type FirebaseConfig } from "@/lib/firebase"

interface FirebaseContextType {
  isReady: boolean
  config: FirebaseConfig | null
  reinitialize: () => void
}

export const FirebaseContext = createContext<FirebaseContextType>({
  isReady: false,
  config: null,
  reinitialize: () => {}
})

export function FirebaseProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false)
  const [config, setConfig] = useState<FirebaseConfig | null>(null)

  const initialize = () => {
    try {
      const savedConfig = localStorage.getItem("firebaseConfig")
      if (savedConfig) {
        const parsedConfig = JSON.parse(savedConfig)
        initFirebase(parsedConfig)
        setConfig(parsedConfig)
        setIsReady(true)
      }
    } catch (error) {
      console.error("Failed to initialize Firebase:", error)
      setIsReady(false)
      setConfig(null)
    }
  }

  useEffect(() => {
    initialize()
  }, [])

  return (
    <FirebaseContext.Provider value={{ isReady, config, reinitialize: initialize }}>
      {children}
    </FirebaseContext.Provider>
  )
}
