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
        <div className="flex items-center space-x-2">
          <img src="/tcc-logo.png" alt="Logo" className="h-15 w-auto object-contain" />
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-col md:flex-row md:flex md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 origin-top"
            >
              <button className="text-gray-700 hover:text-blue-600 py-2 md:py-0" onClick={() => router.push('/')}>Home</button>
              <button className="text-gray-700 hover:text-blue-600 py-2 md:py-0" onClick={() => router.push('/services')}>Services</button>
              <button className="text-gray-700 hover:text-blue-600 py-2 md:py-0" onClick={() => router.push('/groups')}>Groups</button>
              <button className="text-gray-700 hover:text-blue-600 py-2 md:py-0" onClick={() => router.push('/news-letter')}>News Letter</button>
              <button className="text-gray-700 hover:text-blue-600 py-2 md:py-0" onClick={() => router.push('/contact-us')}>Contact Us</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}