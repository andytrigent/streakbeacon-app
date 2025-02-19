"use client"

import { useState, useContext } from "react"
import { Plus } from "lucide-react"
import { collection, addDoc } from "firebase/firestore"
import { getDb } from "@/lib/firebase"
import { FirebaseContext } from "@/app/providers/FirebaseProvider"
import AddTaskPopup from "@/app/components/AddTaskPopup"

export default function AddTaskBar() {
  const { isReady } = useContext(FirebaseContext)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleAddTask = async (task: { text: string; frequency: string; dueDate?: Date }) => {
    if (!isReady) return

    try {
      const db = getDb()
      const tasksRef = collection(db, "tasks")
      await addDoc(tasksRef, {
        ...task,
        completed: false,
        createdAt: new Date()
      })
    } catch (error) {
      console.error("Error adding task:", error)
    } finally {

      setIsPopupOpen(false)
    }
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
          >
            <Plus className="w-6 h-6 mr-2" />
            Add New Task
          </button>
        </div>
      </div>
      <AddTaskPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onAddTask={handleAddTask} />
    </>
  )
}

