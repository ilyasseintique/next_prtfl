export default function Experience() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Experience</h1>
        
        {/* Timeline */}
        <div className="space-y-8">
          {/* Experience Item 1 */}
          <div className="relative border-l-2 border-blue-200 dark:border-blue-800 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Job Title</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Company Name</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Describe your role and key responsibilities. What projects did you work on? 
                What impact did you make? What technologies did you use?
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">AWS</span>
              </div>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative border-l-2 border-blue-200 dark:border-blue-800 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Previous Job Title</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2021 - 2023</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Previous Company</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Description of your previous role. Focus on achievements, growth, and key learnings.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">JavaScript</span>
                <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded">Docker</span>
              </div>
            </div>
          </div>

          {/* Education/Certification */}
          <div className="relative border-l-2 border-green-200 dark:border-green-800 pl-8">
            <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-2.5 top-0"></div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">Graduation Year</span>
              </div>
              <p className="text-green-600 dark:text-green-400 font-medium mb-3">University/Institution Name</p>
              <p className="text-gray-600 dark:text-gray-300">
                Degree in Computer Science or related field. Mention relevant coursework, 
                projects, or achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}