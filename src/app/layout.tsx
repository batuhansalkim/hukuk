'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { FaEllipsisV } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sistem tercihini kontrol et
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Local storage'dan tercihi al
    const savedMode = localStorage.getItem('darkMode');
    setDarkMode(savedMode ? JSON.parse(savedMode) : isDark);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  return (
    <html lang="tr" className={darkMode ? 'dark' : ''}>
      <body className={`${inter.className} min-h-screen flex flex-col transition-colors duration-200 bg-zinc-100 dark:bg-gray-900`}>
        <header className="shadow-sm transition-colors duration-200 bg-zinc-200 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-6">
                <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Hukuk Notları
                </Link>
                <Link 
                  href="/admin" 
                  className="text-sm font-medium text-zinc-700 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-indigo-400 transition-colors"
                >
                  Admin Paneli
                </Link>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-gray-700 text-zinc-700 dark:text-gray-300 hover:bg-zinc-300 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  {darkMode ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>

                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-lg bg-zinc-100 dark:bg-gray-700 text-zinc-700 dark:text-gray-300 hover:bg-zinc-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <FaEllipsisV className="w-5 h-5" />
                  </button>
                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                      >
                        <div className="py-1">
                          <Link href="/contributors" className="block w-full text-left px-4 py-2 text-sm text-zinc-700 dark:text-gray-200 hover:bg-zinc-100 dark:hover:bg-gray-700">
                            Emeği Geçenler
                          </Link>
                          <Link href="/contact" className="block w-full text-left px-4 py-2 text-sm text-zinc-700 dark:text-gray-200 hover:bg-zinc-100 dark:hover:bg-gray-700">
                            İletişim
                          </Link>
                          <Link href="/more" className="block w-full text-left px-4 py-2 text-sm text-zinc-700 dark:text-gray-200 hover:bg-zinc-100 dark:hover:bg-gray-700">
                            Daha Fazla
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="bg-zinc-200 dark:bg-gray-800 mt-auto transition-colors duration-200">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-zinc-700 dark:text-gray-400 text-sm">
              {new Date().getFullYear()} Hukuk Notları. Batuhan SALKIM Tüm hakları saklıdır.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
