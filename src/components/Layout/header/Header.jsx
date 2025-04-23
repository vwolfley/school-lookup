import React, { useState } from "react"
import magLogo from "../../../assets/images/MAG-logo-color-horizontal-white.webp"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      tag="header"
      className="top-0 z-10 flex h-16 w-full border-b border-slate-700 bg-slate-900 p-4 ">
      <section className="container mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-row justify-end space-x-52">
          <a
            href="https://azmag.gov/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-x-5">
            <img className="block h-5 lg:h-6 xl:h-8" src={magLogo} alt="MAG Power Logo" />
            <h1 className="self-center text-sm md:text-base font-bold text-slate-50">
              Title Here
            </h1>
          </a>
        </div>
        <div className="flex flex-row justify-center">
          <button
            id="hamburger-button"
            type="button"
            className="inline-flex items-center p-2 text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100"
            aria-controls="navbar-mobile-menu"
            aria-expanded="false"
            onClick={toggleMobileMenu}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
          <nav id="nav-menu" className="hidden md:flex-row md:flex">
            <ul className="flex flex-col justify-center md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-semibold md:border-0 text-slate-800">
              <li className="text-center flex">

              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? "animate-open-menu" : "hidden"
        } fixed w-48 top-0 mt-16 right-0 flex-col bg-slate-50 text-lg text-slate-800 md:hidden`}>
        <nav className="flex flex-col px-2 py-4" aria-label="mobile-menu">
          <li className="text-center flex flex-col list-none">

          </li>
        </nav>
      </section>
    </header>
  )
}
