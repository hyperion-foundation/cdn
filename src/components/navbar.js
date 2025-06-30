"use client"
import { usePathname } from "next/navigation"
import { useState } from "react";
import { ArrowTopRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from 'next/image';
import HTLA from "@/components/headerlogotextanimation";
import AnimatedButton from "./animatedbutton2";

const Navbar = () => {
  const pathname = usePathname();
  const [isGamingMenuOpen, setIsGamingMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
   <>
    <nav className="bg-[#0a0a0a] border-b border-b-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 ">
          <Image width={32} height={64} src='https://storage.googleapis.com/assets.hyperfoundation.xyz/hyperion-foundation-logo-512.png' className='h-8' alt='Hyperion Foundation Logo' />
          <span className='text-lg font-normal text-white whitespace-nowrap'><HTLA /></span>
        </Link>
        
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div className="hidden md:flex space-x-4 text-sm">
          {pathname !== '/' && (
            <Link href="/" className="hover:text-gray-500">
              <AnimatedButton>
                Home
              </AnimatedButton>
            </Link>
          )}
          {/* <Link href="/about/" className="px-3 py-0.1 border rounded-md border-gray-400 text-white hover:text-[#333333] hover:bg-[#ededed]">About</Link> */}
          <Link href="/about">
            <AnimatedButton>
              About
            </AnimatedButton>
          </Link>
          {/* <Link href="/terms-of-service" className="px-3 py-1 border rounded-md border-gray-400 text-white hover:text-[#333333] hover:bg-[#ededed]">Terms of Services</Link> */}
          <Link href="/terms-of-service">
            <AnimatedButton>
              Terms of Service
            </AnimatedButton>
          </Link>
          <div className="relative" onMouseEnter={() => setIsGamingMenuOpen(true)} onMouseLeave={() => setIsGamingMenuOpen(false)}>
            <button className="flex items-center text-white px-5 py-2 border rounded-md border-gray-600 hover:text-[#333333] hover:bg-[#ededed]">
              Gaming Contents
              <ChevronDownIcon className="inline-block" />
            </button>
            {isGamingMenuOpen && (
              <div className="absolute mt-0.3 w-48 bg-[#0a0a0a] rounded-md shadow-lg py-1 z-20">
                <Link href="/contents/astroneer" className="block px-4 py-2 text-sm text-white hover:bg-[#ededed] hover:text-[#0a0a0a]">Astroneer</Link>
                <Link href="/contents/hyperion-network" className="block px-4 py-2 text-sm text-white hover:bg-[#ededed] hover:text-[#0a0a0a]">Hyperion Network</Link>
                <Link href="/contents/hyperion-private-smp" className="block px-4 py-2 text-sm text-white hover:bg-[#ededed] hover:text-[#0a0a0a]">Hyperion Private SMP</Link>
              </div>
            )}
          </div>
          <Link href="https://www.hyperfoundation.my.id/support" target="_blank">
          <AnimatedButton>
            Support
            <ArrowTopRightIcon className="inline-block" />
          </AnimatedButton>
          </Link>
        </div>
        {/* <div className="hidden md:flex items-center">
          <div className="relative" onMouseLeave={() => setIsLanguageMenuOpen(false)}>
            <button onMouseEnter={() => setIsLanguageMenuOpen(true)} className="flex items-center text-white hover:text-gray-400">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.944A5.962 5.962 0 0110 6c.774 0 1.515.15 2.193.43l-1.87 1.87a.75.75 0 101.06 1.06l1.87-1.87A5.963 5.963 0 0114 10c0 .774-.15 1.515-.43 2.193l1.87 1.87a.75.75 0 101.06-1.06l-1.87-1.87A5.962 5.962 0 0110 14c-1.898 0-3.59-1.077-4.433-2.668a.75.75 0 10-1.234.808A7.463 7.463 0 0010 15.5c2.47 0 4.63-1.325 5.866-3.332a.75.75 0 10-1.234-.808A5.963 5.963 0 0110 14c-1.898 0-3.59-1.077-4.433-2.668a.75.75 0 10-1.234.808A7.463 7.463 0 0010 15.5c2.47 0 4.63-1.325 5.866-3.332a.75.75 0 00-1.234-.808A5.963 5.963 0 0110 12c-1.898 0-3.59-1.077-4.433-2.668a.75.75 0 00-1.234.808A7.463 7.463 0 0010 11.5c2.47 0 4.63-1.325 5.866-3.332a.75.75 0 10-1.234-.808A5.963 5.963 0 0110 8c-1.898 0-3.59-1.077-4.433-2.668a.75.75 0 00-1.234.808A7.463 7.463 0 0010 7.5c2.47 0 4.63-1.325 5.866-3.332a.75.75 0 00-1.234-.808A5.963 5.963 0 0110 4c-1.898 0-3.59-1.077-4.433-2.668a.75.75 0 00-1.234.808A7.463 7.463 0 0010 3.5c2.47 0 4.63-1.325 5.866-3.332a.75.75 0 00-1.234-.808A5.963 5.963 0 0110 2a8 8 0 00-5.668 13.668.75.75 0 001.234-.808A5.963 5.963 0 016 10c0-1.898 1.077-3.59 2.668-4.433a.75.75 0 00-.808-1.234A7.463 7.463 0 004.5 10c0 2.47 1.325 4.63 3.332 5.866a.75.75 0 00.808-1.234A5.963 5.963 0 018 10c0-1.898 1.077-3.59 2.668-4.433a.75.75 0 00-.808-1.234A7.463 7.463 0 008.5 10a7.463 7.463 0 00-4.168 1.668.75.75 0 10.808 1.234A5.963 5.963 0 016 10z" clipRule="evenodd" />
                </svg>
              <span className="ml-2">Language</span>
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#ededed] hover:text-[#0a0a0a]">English</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#ededed] hover:text-[#0a0a0a]">Bahasa Indonesia</Link>
              </div>
            )}
          </div>
        </div> */}
      </div>

      {/* <div id="mobile-menu" className="hidden md:hidden mt-4">
        {pathname !== '/' && (
            <Link href="/" className="block py-2 px-4 text-sm hover:text-gray-200">Home</Link>
          )}
        <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</Link>
        <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Services</Link>
        <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</Link>
      </div> */}
    </nav>
    </>
  );
};

export default Navbar;