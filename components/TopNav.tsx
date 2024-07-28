import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function TopNav({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="top-nav bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-150 ease-in-out"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition duration-150 ease-in-out">
            Home
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {children}
        </div>
      </div>
      <style jsx>{`
        .top-nav {
          top: 0;
          position: fixed;
          width: 100%;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          border-bottom: 1px solid var(--border-color);
        }
      `}</style>
    </nav>
  );
}