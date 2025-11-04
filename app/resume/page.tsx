export default function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h1>
          <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download PDF
          </button>
        </div>

        {/* Resume Content */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Your Full Name</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-3">Software Developer</p>
            <div className="flex justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span>your.email@example.com</span>
              <span>•</span>
              <span>+1 (555) 123-4567</span>
              <span>•</span>
              <span>City, Country</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Experienced software developer with X+ years of expertise in full-stack development. 
              Passionate about creating efficient, scalable solutions and staying current with emerging technologies. 
              Strong background in [your main technologies] with a proven track record of delivering high-quality projects.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                <p className="text-gray-600 dark:text-gray-300">React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                <p className="text-gray-600 dark:text-gray-300">Node.js, Python, Express.js, RESTful APIs, GraphQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Database</h4>
                <p className="text-gray-600 dark:text-gray-300">PostgreSQL, MongoDB, MySQL, Redis</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tools & Others</h4>
                <p className="text-gray-600 dark:text-gray-300">Git, Docker, AWS, CI/CD, Jest, Linux</p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Senior Software Developer</h4>
                    <p className="text-blue-600 dark:text-blue-400">Company Name</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">2023 - Present</span>
                </div>
                <ul className="text-gray-600 dark:text-gray-300 ml-4 space-y-1">
                  <li>• Led development of key features that increased user engagement by X%</li>
                  <li>• Collaborated with cross-functional teams to deliver projects on time</li>
                  <li>• Mentored junior developers and conducted code reviews</li>
                  <li>• Implemented automated testing, reducing bugs by X%</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Software Developer</h4>
                    <p className="text-blue-600 dark:text-blue-400">Previous Company</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">2021 - 2023</span>
                </div>
                <ul className="text-gray-600 dark:text-gray-300 ml-4 space-y-1">
                  <li>• Developed and maintained web applications using modern frameworks</li>
                  <li>• Optimized application performance, improving load times by X%</li>
                  <li>• Participated in agile development processes and sprint planning</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">
              Education
            </h3>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h4>
                <p className="text-blue-600 dark:text-blue-400">University Name</p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">Graduation Year</span>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">
              Key Projects
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Project Name 1</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Brief description of the project, technologies used, and impact/results achieved.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Project Name 2</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Brief description of the project, technologies used, and impact/results achieved.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}