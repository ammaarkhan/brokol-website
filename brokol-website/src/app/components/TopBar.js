import { useState } from 'react';
import Link from 'next/link';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-background-green fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-brokol-green font-bold text-xl">
          <Link href="#">BROKOL</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-brokol-green focus:outline-none">
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-4">
          <Link href="#demo" className="text-white px-4 py-2 hover:bg-gray-700 rounded-lg">Demo</Link>
          <Link href="#benefits" className="text-white px-4 py-2 hover:bg-gray-700 rounded-lg">Benefits</Link>
          <Link href="#how-it-works" className="text-white px-4 py-2 hover:bg-gray-700 rounded-lg">How It Works</Link>
          <Link href="#testimonials" className="text-white px-4 py-2 hover:bg-gray-700 rounded-lg">Testimonials</Link>
        </div>
        <div className="hidden md:block">
          <Link href="#get-early-access" className="text-white px-4 py-2 bg-brokol-green hover:bg-gray-700 rounded-lg">Get Early Access</Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background-green">
          <Link href="#demo" className="block text-white px-8 py-2 hover:bg-gray-700" onClick={closeMenu}>Demo</Link>
          <Link href="#benefits" className="block text-white px-8 py-2 hover:bg-gray-700" onClick={closeMenu}>Benefits</Link>
          <Link href="#how-it-works" className="block text-white px-8 py-2 hover:bg-gray-700" onClick={closeMenu}>How It Works</Link>
          <Link href="#testimonials" className="block text-white px-8 py-2 hover:bg-gray-700" onClick={closeMenu}>Testimonials</Link>
          <Link href="#get-early-access" className="block text-white pl-4 py-2 bg-brokol-green hover:bg-gray-700 rounded-lg w-[45%] mx-8 mb-4 mt-2" onClick={closeMenu}>Get Early Access</Link>
        </div>
      )}
    </div>
  );
};

export default TopBar;
