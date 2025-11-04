export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">
          Here are some projects I've built while learning and practicing software development.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Portfolio Website</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                A responsive personal portfolio built with Next.js and Tailwind CSS. 
                Features dark mode, mobile navigation, and modern design.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs rounded">Tailwind</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">TypeScript</span>
              </div>
              <div className="flex gap-3 text-sm">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Task Manager App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                A simple todo application with CRUD operations, local storage, 
                and drag-and-drop functionality for organizing tasks.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 text-xs rounded">JavaScript</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs rounded">CSS</span>
              </div>
              <div className="flex gap-3 text-sm">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Weather App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                A weather application that fetches real-time data from an API, 
                displays current conditions and 5-day forecast with clean UI.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded">HTML</span>
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 text-xs rounded">JavaScript</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs rounded">API</span>
              </div>
              <div className="flex gap-3 text-sm">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 4 - Class Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Library Management System</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                A class project built with Python and SQLite for managing 
                book inventory, user accounts, and borrowing system.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">SQLite</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded">Tkinter</span>
              </div>
              <div className="flex gap-3 text-sm">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Demo Video</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          {/* Learning Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quiz App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Interactive quiz application with multiple choice questions, 
                timer functionality, and score tracking. Built while learning React.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 text-xs rounded">JavaScript</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs rounded">CSS</span>
              </div>
              <div className="flex gap-3 text-sm">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          {/* Future Project */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 overflow-hidden">
            <div className="h-40 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">Coming Soon...</h3>
              <p className="text-gray-500 dark:text-gray-500 mb-4 text-sm">
                Working on a new full-stack project. Stay tuned for updates!
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">Database</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}