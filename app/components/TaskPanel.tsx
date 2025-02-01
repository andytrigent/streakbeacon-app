"use client"

import { useState, useEffect, useContext } from "react"
import { CheckCircle, Circle, Trash2, Edit2, Loader2 } from "lucide-react"
import { collection, doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
import { getDb } from "@/lib/firebase"
import { FirebaseContext } from "@/app/(client)/FirebaseProvider"

type TaskFrequency = "daily" | "weekly" | "monthly" | "biweekly" | "future"

interface Task {
  id: string
  text: string
  completed: boolean
  frequency: TaskFrequency
  dueDate?: Date
  createdAt: Date
}

export default function TaskPanel() {
  const { isReady } = useContext(FirebaseContext)
  const [tasks, setTasks] = useState<Task[]>([])
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchTasks() {
      if (!isReady) {
        setIsLoading(false)
        return
      }

      try {
        const db = getDb()
        const tasksRef = collection(db, "tasks")
        const snapshot = await getDocs(tasksRef)
        const loadedTasks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date(),
          dueDate: doc.data().dueDate?.toDate() || undefined
        })) as Task[]
        
        setTasks(loadedTasks.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()))
      } catch (error) {
        console.error("Error fetching tasks:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTasks()
  }, [isReady])

  const toggleTask = async (id: string) => {
    if (!isReady) return

    const task = tasks.find(t => t.id === id)
    if (!task) return

    try {
      const db = getDb()
      const taskRef = doc(db, "tasks", id)
      await updateDoc(taskRef, {
        completed: !task.completed
      })
      setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
    } catch (error) {
      console.error("Error toggling task:", error)
    }
  }

  const deleteTask = async (id: string) => {
    if (!isReady) return

    try {
      const db = getDb()
      const taskRef = doc(db, "tasks", id)
      await deleteDoc(taskRef)
      setTasks(tasks.filter((task) => task.id !== id))
    } catch (error) {
      console.error("Error deleting task:", error)
    }
  }

  const startEditingTask = (id: string) => {
    setEditingTaskId(id)
  }

  const saveEditedTask = async (id: string, newText: string) => {
    if (!isReady) return

    try {
      const db = getDb()
      const taskRef = doc(db, "tasks", id)
      await updateDoc(taskRef, { text: newText })
      setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)))
    } catch (error) {
      console.error("Error updating task:", error)
    } finally {
      setEditingTaskId(null)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-1/3">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tasks</h2>
      {isLoading ? (
        <div className="text-center py-4 text-gray-500">
          <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
          Loading tasks...
        </div>
      ) : !isReady ? (
        <div className="text-center py-4 text-gray-500">
          Please configure Firebase in Settings to manage tasks
        </div>
      ) : tasks.length === 0 ? (
        <div className="text-center py-4 text-gray-500">No tasks yet</div>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between">
            <div className="flex items-center flex-grow">
              <button onClick={() => toggleTask(task.id)} className="mr-2">
                {task.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {editingTaskId === task.id ? (
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => saveEditedTask(task.id, e.target.value)}
                  onBlur={() => setEditingTaskId(null)}
                  autoFocus
                  className="flex-grow bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <span className={`${task.completed ? "line-through text-gray-500" : "text-gray-900 dark:text-white"}`}>
                  {task.text}
                </span>
              )}
            </div>
            <div className="flex items-center">
              <button onClick={() => startEditingTask(task.id)} className="text-blue-500 hover:text-blue-700 mr-2">
                <Edit2 className="w-4 h-4" />
              </button>
              <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </li>
        ))}
        </ul>
      )}
    </div>
  )
}

