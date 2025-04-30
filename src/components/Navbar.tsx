'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">

        {/* logo */}
        <div className="flex items-center space-x-2" onClick={() => router.push('/')}>
          <img src="/tcc-logo.png" alt="Logo" className="lg:h-22 md:h-15 sm:h-15 h-15 w-auto object-contain" />
        </div>

        {/* burger icon (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-gray-700"></span>
            <span className="block h-0.5 w-6 bg-gray-700"></span>
            <span className="block h-0.5 w-6 bg-gray-700"></span>
          </div>
        </button>

        {/* navigation links */}
        <div className="hidden md:flex space-x-6">
          <button className="text-gray-700 hover:text-blue-600 py-2" onClick={() => router.push('/')}>Home</button>
          <button className="text-gray-700 hover:text-blue-600 py-2" onClick={() => router.push('/services')}>Services</button>
          <button className="text-gray-700 hover:text-blue-600 py-2" onClick={() => router.push('/groups')}>Groups</button>
          <button className="text-gray-700 hover:text-blue-600 py-2" onClick={() => router.push('/news-letter')}>News Letter</button>
          <button className="text-gray-700 hover:text-blue-600 py-2" onClick={() => router.push('/contact-us')}>Contact Us</button>
        </div>

        {/* mobile navigation links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden flex flex-col space-y-4 absolute top-full left-0 w-full bg-white px-4 py-6"
            >
              <button className="text-gray-700 hover:text-blue-600 py-2" onClick={() => router.push('/')}>Home</button>
              <button className="text-gray-700 hover:text-blue-600 py-2" onClick={() => router.push('/services')}>Services</button>
              <button className="text-gray-700 hover:text-blue-600 py-2" onClick={() => router.push('/groups')}>Groups</button>
              <button className="text-gray-700 hover:text-blue-600 py-2" onClick={() => router.push('/news-letter')}>News Letter</button>
              <button className="text-gray-700 hover:text-blue-600 py-2" onClick={() => router.push('/contact-us')}>Contact Us</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
