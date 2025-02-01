import Header from "./components/Header"
import StreakTracker from "./components/StreakTracker"
import TaskPanel from "./components/TaskPanel"
import AddTaskBar from "./components/AddTaskBar"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col md:flex-row p-4 gap-4">
        <TaskPanel />
        <StreakTracker />
      </main>
      <AddTaskBar />
      <Footer />
    </div>
  )
}

