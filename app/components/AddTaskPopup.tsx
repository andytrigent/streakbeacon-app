"use client"

import { useState, useContext } from "react"
import { X } from "lucide-react"
import { collection, addDoc } from "firebase/firestore"
import { getDb } from "@/lib/firebase"
import { FirebaseContext } from "@/app/(client)/FirebaseProvider"

type TaskFrequency = "daily" | "weekly" | "monthly" | "biweekly" | "future"

interface Task {
  id?: string
  text: string
  frequency: TaskFrequency
  dueDate?: Date
  completed: boolean
  createdAt: Date
}

interface AddTaskPopupProps {
  isOpen: boolean
  onClose: () => void
  onAddTask: (task: Task) => void
}

export default function AddTaskPopup({ isOpen, onClose, onAddTask }: AddTaskPopupProps) {
  const { isReady } = useContext(FirebaseContext)
  const [taskText, setTaskText] = useState("")
  const [frequency, setFrequency] = useState<TaskFrequency>("daily")
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!taskText.trim() || !isReady) return

    try {
      const db = getDb()
      const tasksRef = collection(db, "tasks")
      const newTask = {
        text: taskText,
        frequency,
        dueDate,
        completed: false,
        createdAt: new Date()
      }
      
      const docRef = await addDoc(tasksRef, newTask)
      onAddTask({ ...newTask, id: docRef.id })
      
      setTaskText("")
      setFrequency("daily")
      setDueDate(undefined)
      onClose()
    } catch (error) {
      console.error("Error adding task:", error)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Task</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="task-text" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Task
            </label>
            <input
              type="text"
              id="task-text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your task"
              required
            />
          </div>
          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Frequency
            </label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as TaskFrequency)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="biweekly">Biweekly</option>
              <option value="future">Future</option>
            </select>
          </div>
          {frequency === "future" && (
            <div>
              <label htmlFor="due-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Due Date
              </label>
              <input
                type="date"
                id="due-date"
                value={dueDate?.toISOString().split("T")[0] || ""}
                onChange={(e) => setDueDate(new Date(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          )}
          {!isReady ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              Please configure Firebase in Settings to add tasks
            </p>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add Task
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

