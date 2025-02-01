export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 p-4 text-center text-gray-600 dark:text-gray-300">
      <p className="text-sm">"Shine a light on your progress. Stay consistent, stay unstoppable!"</p>
      <p className="text-xs mt-2">Last synced: {new Date().toLocaleTimeString()}</p>
    </footer>
  )
}

