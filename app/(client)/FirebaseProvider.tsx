"use client"

import React, { createContext, useState, useEffect, useCallback } from 'react'
import { initFirebase, type FirebaseConfig } from '@/lib/firebase'

interface FirebaseState {
  isReady: boolean
  config: FirebaseConfig | null
  reinitialize: () => void
}

export const FirebaseContext = createContext<FirebaseState>({
  isReady: false,
  config: null,
  reinitialize: () => {}
})

export default function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false)
  const [config, setConfig] = useState<FirebaseConfig | null>(null)

  const initializeFirebase = useCallback(() => {
    const savedConfig = localStorage.getItem('firebaseConfig')
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig)
        initFirebase(parsedConfig)
        setConfig(parsedConfig)
        setIsReady(true)
      } catch (error) {
        console.error('Failed to initialize Firebase:', error)
        setIsReady(false)
        setConfig(null)
      }
    } else {
      setIsReady(false)
      setConfig(null)
    }
  }, [])

  useEffect(() => {
    initializeFirebase()
  }, [initializeFirebase])

  return (
    <FirebaseContext.Provider value={{ isReady, config, reinitialize: initializeFirebase }}>
      {children}
    </FirebaseContext.Provider>
  )
}
