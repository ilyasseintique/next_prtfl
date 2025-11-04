export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a Computer Science student passionate about technology and software development. 
                Currently in my [3rd] year at [University Name], I'm constantly learning and applying 
                new technologies to solve real-world problems.
              </p>
              <p>
                My journey into programming started in high school when I built my first website. 
                Since then, I've been fascinated by how code can bring ideas to life and create 
                meaningful experiences for users.
              </p>
              <p>
                When I'm not coding, you can find me [reading tech blogs, playing video games, 
                hiking, etc.]. I believe in continuous learning and enjoy staying up-to-date 
                with the latest industry trends.
              </p>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Frontend</h3>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <div>React & Next.js</div>
                  <div>JavaScript/TypeScript</div>
                  <div>HTML & CSS</div>
                  <div>Tailwind CSS</div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Backend & Tools</h3>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <div>Node.js & Express</div>
                  <div>Python</div>
                  <div>Git & GitHub</div>
                  <div>VS Code</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Education:</span>
                  <div className="text-gray-600 dark:text-gray-300">[Degree] in Computer Science</div>
                  <div className="text-gray-500 dark:text-gray-400">[University Name]</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Expected Graduation:</span>
                  <div className="text-gray-600 dark:text-gray-300">[Year]</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Location:</span>
                  <div className="text-gray-600 dark:text-gray-300">[Your City, Country]</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Interests:</span>
                  <div className="text-gray-600 dark:text-gray-300">Web Development, AI/ML, Open Source</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Currently Learning</h3>
              <div className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                <div>• Advanced React Patterns</div>
                <div>• Database Design</div>
                <div>• Cloud Computing (AWS)</div>
                <div>• Machine Learning Basics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}