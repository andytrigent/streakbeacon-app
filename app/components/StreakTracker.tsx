"use client"

import { useState } from "react"
import { Share2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DayData {
  date: Date
  completedTasks: number
  totalTasks: number
  isCurrentMonth: boolean
  isFuture: boolean
}

export default function StreakTracker() {
  const [hoveredCell, setHoveredCell] = useState<DayData | null>(null)
  const currentDate = new Date()

  const getColor = (completedTasks: number, totalTasks: number, isCurrentMonth: boolean, isFuture: boolean) => {
    if (!isCurrentMonth || isFuture) return "bg-gray-100 dark:bg-gray-800"
    if (totalTasks === 0) return "bg-gray-200 dark:bg-gray-700"
    const percentage = (completedTasks / totalTasks) * 100

    if (percentage === 0) return "bg-gray-200 dark:bg-gray-700"
    if (percentage <= 25) return "bg-green-100 dark:bg-green-900"
    if (percentage <= 50) return "bg-green-300 dark:bg-green-700"
    if (percentage <= 75) return "bg-green-500 dark:bg-green-500"
    return "bg-green-700 dark:bg-green-300"
  }

  const generateMonthData = (date: Date) => {
    const data: DayData[][] = []
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

    // Start from the last Monday of the previous month
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - startDate.getDay() + (startDate.getDay() === 0 ? -6 : 1))

    for (let week = 0; week < 6; week++) {
      const row: DayData[] = []
      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(startDate)
        currentDate.setDate(startDate.getDate() + week * 7 + day)
        const isCurrentMonth = currentDate.getMonth() === date.getMonth()
        const isFuture = currentDate > new Date()
        const totalTasks = isCurrentMonth && !isFuture ? 7 : 0 // Example: 7 tasks planned per day
        row.push({
          date: currentDate,
          completedTasks: isFuture ? 0 : Math.floor(Math.random() * (totalTasks + 1)),
          totalTasks,
          isCurrentMonth,
          isFuture,
        })
      }
      data.push(row)
    }
    return data
  }

  const monthData = generateMonthData(currentDate)

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex-grow">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Streak Tracker</h2>
          <Select defaultValue={`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`}>
            <SelectTrigger className="w-[180px]">
              <SelectValue>
                {new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(currentDate)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`}>
                {new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(currentDate)}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      <div className="relative">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {monthData.flat().map((cell, index) => (
            <div
              key={index}
              className={`w-8 h-8 flex items-center justify-center ${getColor(
                cell.completedTasks,
                cell.totalTasks,
                cell.isCurrentMonth,
                cell.isFuture,
              )} ${cell.isCurrentMonth ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-600"} 
              text-sm font-medium rounded-sm transition-colors duration-200`}
              onMouseEnter={() => setHoveredCell(cell)}
              onMouseLeave={() => setHoveredCell(null)}
            >
              {cell.date.getDate()}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center text-xs text-gray-600 dark:text-gray-400">
          <span className="mr-2">Less</span>
          {[0, 25, 50, 75, 100].map((percentage) => (
            <div
              key={percentage}
              className={`w-3 h-3 rounded-sm ${getColor(percentage, 100, true, false)} mx-0.5`}
              title={`${percentage}% completed`}
            />
          ))}
          <span className="ml-2">More</span>
        </div>

        {/* Tooltip */}
        {hoveredCell && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-md text-xs mt-2">
            {hoveredCell.isCurrentMonth && !hoveredCell.isFuture ? (
              <>
                {hoveredCell.completedTasks} of {hoveredCell.totalTasks} tasks completed
                <br />
                {new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(hoveredCell.date)}
                <br />
                {Math.round((hoveredCell.completedTasks / hoveredCell.totalTasks) * 100)}% completion
              </>
            ) : (
              <>
                {new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(hoveredCell.date)}
                <br />
                {hoveredCell.isFuture ? "Future date" : "Outside current month"}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

