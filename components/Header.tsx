import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Logo from "../public/african-trends.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="shadow-xl w-full z-10 sticky">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink mx-auto">
                <h1 className="font-bold text-xl cursor-pointer">
                  <Link href="/">
                    <img
                      className="w-60 object-contain"
                      src={Logo.src}
                      alt="african  trends logo"
                    />
                  </Link>
                </h1>
              </div>
              <div className="hidden md:block mx-auto">
                <div className="ml-10 flex items-baseline space-x-4">
                  <div className="cursor-pointer text-green-600 font-semibold px-3 py-2 text-md hover:text-gray-600">
                    <Link href="/">Home</Link>
                  </div>

                  <div className="cursor-pointer text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-semibold">
                    <Link href="/about">Our Story</Link>
                  </div>

                  <div className="cursor-pointer border border-green-600 hover:bg-green-600 text-green-600 hover:text-white px-3 py-3 rounded-full text-sm font-semibold">
                    <Link href="/getstarted">Get Started</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile responsive section */}
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-green-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open Main Menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <div className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </div>
                <div className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  our Story
                </div>

                <div className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Get Started
                </div>
                <div className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
