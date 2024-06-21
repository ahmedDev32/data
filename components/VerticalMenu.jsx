import React from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const VerticalMenu = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktop(window.innerWidth >= 768); // Adjust minimum width as needed
    };

    // Initial check
    checkScreenWidth();

    // Event listener for window resize
    window.addEventListener('resize', checkScreenWidth);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  if (!isDesktop) {
    return null; // Return null if not desktop (mobile or tablet)
  }  return (
    <div className="">
      <ul className="list-none p-0">
        {/* Non-Dropdown Categories */}
        <li className="mt-2">
          <Link href="/Products?p=Eyelash Tweezers" className="block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
            Eyelash Tweezers
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/Products?p=Paper Coated Tweezers" className="block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
            Paper Coated Tweezers
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/Products?p=Fiber Tip Tweezers" className="block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
            Fiber Tip Tweezers
          </Link>
        </li>
        
        <li className="mt-2">
          <Link href="/Products?p=ORTHOPEDIC INSTRUMENTS" className="block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
          ORTHOPEDIC INSTRUMENTS
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/Products?p=Scissors" className="block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
          Scissors
          </Link>
        </li>
        <li className="mt-2">
          <Link href="//Products?p=Dental Instruments" className="block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
          Dental Instruments
          </Link>
        </li>
        <li className="mt-2">
          <Link href="//Products?p=Cardiovascular" className="block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
          Cardiovascular
          </Link>
        </li>
        <li className="mt-2">
          <Link href="//Products?p=Gynecology" className="block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
          Gynecology
          </Link>
        </li>
        <li className="mt-2">
          <Link href="//Products?p=Needle Holder" className="block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
          Needle Holder
          </Link>
        </li>
        <li className="mt-2">
          <Link href="//Products?p=Retractors" className="block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
          Retractors
          </Link>
        </li>
        
        
        {/* Dropdown Categories */}
        <li className="group mt-2">
          <a href="#" className="flex items-center justify-between block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
            <span>Manicure & Pedicure</span>
            <FaChevronDown className="ml-2" />
          </a>
          <ul className="hidden group-hover:block bg-white border border-gray-200">
            <li>
              <Link href="//Products?p=Cuticle Nipper" className="block p-4 text-gray-800 hover:bg-sky-300">
                Cuticle Nipper
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Nail Pincher" className="block p-4 text-gray-800 hover:bg-sky-300">
                Nail Pincher
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Nail Pusher" className="block p-4 text-gray-800 hover:bg-sky-300">
                Nail Pusher
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Manicure Pedicure Kits" className="block p-4 text-gray-800 hover:bg-sky-300">
                Manicure Pedicure Kits
              </Link>
            </li>
          </ul>
        </li>

        <li className="group mt-2">
          <a href="#" className="flex items-center justify-between block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
            <span>Shaving Tools</span>
            <FaChevronDown className="ml-2" />
          </a>
          <ul className="hidden group-hover:block bg-white border border-gray-200">
            <li>
              <Link href="//Products?p=Shaving kits" className="block p-4 text-gray-800 hover:bg-sky-300">
                Shaving kits
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Shaving Bowls & Brush" className="block p-4 text-gray-800 hover:bg-sky-300">
                Shaving Bowls & Brush
              </Link>
            </li>
          </ul>
        </li>

        <li className="group mt-2">
          <a href="#" className="flex items-center justify-between block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
            <span>Dental Instruments</span>
            <FaChevronDown className="ml-2" />
          </a>
          <ul className="hidden group-hover:block bg-white border border-gray-200">
            <li>
              <Link href="//Products?p=Mouth Mirrors" className="block p-4 text-gray-800 hover:bg-sky-300">
                Mouth Mirrors
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Dental Curettes" className="block p-4 text-gray-800 hover:bg-sky-300">
                Dental Curettes
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Diagnostics" className="block p-4 text-gray-800 hover:bg-sky-300">
              Diagnostics
              </Link>
            </li>
          </ul>
        </li>

        <li className="group mt-2">
          <a href="#" className="flex items-center justify-between block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
            <span>Beauty Instruments</span>
            <FaChevronDown className="ml-2" />
          </a>
          <ul className="hidden group-hover:block bg-white border border-gray-200">
            <li>
              <Link href="//Products?p=Eyelash Applicators" className="block p-4 text-gray-800 hover:bg-sky-300">
                Eyelash Applicators
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Eyelash & Eyebrow Scissors" className="block p-4 text-gray-800 hover:bg-sky-300">
                Eyelash & Eyebrow Scissors
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Mirrors for Eyelash Extensions" className="block p-4 text-gray-800 hover:bg-sky-300">
                Mirrors for Eyelash Extensions
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Eyebrow Tweezers" className="block p-4 text-gray-800 hover:bg-sky-300">
                Eyebrow Tweezers
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Lash Lifting Tools" className="block p-4 text-gray-800 hover:bg-sky-300">
                Lash Lifting Tools
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Packaging" className="block p-4 text-gray-800 hover:bg-sky-300">
                Packaging
              </Link>
            </li>
          </ul>
        </li>

        <li className="group mt-2">
          <a href="#" className="flex items-center justify-between block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
            <span>Barber Instruments</span>
            <FaChevronDown className="ml-2" />
          </a>
          <ul className="hidden group-hover:block bg-white border border-gray-200">
            <li>
              <Link href="//Products?p=Hair Cutting Scissors" className="block p-4 text-gray-800 hover:bg-sky-300">
                Hair Cutting Scissors
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Thinning Scissors" className="block p-4 text-gray-800 hover:bg-sky-300">
                Thinning Scissors
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Double Edge Safety Razor" className="block p-4 text-gray-800 hover:bg-sky-300">
                Double Edge Safety Razor
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Shaving Razors" className="block p-4 text-gray-800 hover:bg-sky-300">
                Shaving Razors
              </Link>
            </li>
            <li>
              <Link href="//Products?p=Finger Razors" className="block p-4 text-gray-800 hover:bg-sky-300">
                Finger Razors
              </Link>
            </li>
          </ul>
        </li>

        <li className="group mt-2">
          <a href="#" className="flex items-center justify-between block p-4 bg-sky-300 border border-gray-200 text-gray-800 hover:bg-gray-200">
            <span>Surgical Instruments</span>
            <FaChevronDown className="ml-2" />
          </a>
          <ul className="hidden group-hover:block bg-white border border-gray-200">
            <li>
              <Link href="//Products?p=Eyelash Applicators" className="block p-4 text-gray-800 hover:bg-sky-300">
                Eyelash Applicators
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default VerticalMenu