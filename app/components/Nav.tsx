"use client";

import React from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-medium text-xs">JD</span>
            </div>
            <span className="font-medium text-gray-900 dark:text-white">John Doe</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/about" className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
            <Link href="/projects" className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</Link>
            <Link href="/experience" className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Experience</Link>
            <Link href="/contact" className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
            
            <div className="flex items-center gap-2 ml-4 border-l border-gray-200 dark:border-gray-700 pl-4">
              <button
                onClick={toggleDarkMode}
                className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <Link
                href="/resume"
                className="bg-blue-600 text-white px-3 py-1 text-sm rounded-md hover:bg-blue-700 transition-colors"
              >
                Resume
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1 text-gray-600 dark:text-gray-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="px-6 py-3 space-y-1">
            <Link href="/about" onClick={() => setOpen(false)} className="block px-2 py-2 text-gray-700 dark:text-gray-300">About</Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="block px-2 py-2 text-gray-700 dark:text-gray-300">Projects</Link>
            <Link href="/experience" onClick={() => setOpen(false)} className="block px-2 py-2 text-gray-700 dark:text-gray-300">Experience</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block px-2 py-2 text-gray-700 dark:text-gray-300">Contact</Link>
            <div className="flex gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
              <button onClick={toggleDarkMode} className="flex-1 py-2 text-center text-sm text-gray-600 dark:text-gray-400">
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
              <Link href="/resume" onClick={() => setOpen(false)} className="flex-1 bg-blue-600 py-2 text-center text-sm text-white rounded">Resume</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
