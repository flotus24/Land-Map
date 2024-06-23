"use client"

import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "features",
    },
    {
      id: 4,
      link: "contact",
    },
  ]

  return (
    <>
      <header>
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gray-800 fixed z-10">
          <div>
            <h1 className="text-5xl font-signature ml-2">Riceboard</h1>
          </div>

          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 hover:text-white"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
            {/* <li className="px-4 text-white flex items-center bg-gradient-to-r from-cyan-500 to-blue-400 cursor-pointer">
              Map
            </li> */}
          </ul>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </>
  )
}

export default Navbar
