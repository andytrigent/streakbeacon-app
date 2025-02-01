"use client"

import { useState } from "react"
import { CheckCircle, Circle, Trash2, Edit2 } from "lucide-react"

type TaskFrequency = "daily" | "weekly" | "monthly" | "biweekly" | "future"

type Task = {
  id: number
  text: string
  completed: boolean
  frequency: TaskFrequency
  dueDate?: Date
}

export default function TaskPanel() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Complete project proposal", completed: false, frequency: "daily" },
    { id: 2, text: "Go for a 30-minute run", completed: true, frequency: "weekly" },
    { id: 3, text: "Read 20 pages of book", completed: false, frequency: "daily" },
    { id: 4, text: "Monthly team meeting", completed: false, frequency: "monthly", dueDate: new Date(2023, 5, 15) },
  ])
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null)

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const startEditingTask = (id: number) => {
    setEditingTaskId(id)
  }

  const saveEditedTask = (id: number, newText: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)))
    setEditingTaskId(null)
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-1/3">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tasks</h2>
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
    </div>
  )
}

