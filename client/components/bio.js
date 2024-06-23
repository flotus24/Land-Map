"use client"

import React from "react"
import { FaLongArrowAltRight } from "react-icons/fa"
import Link from "next/link"

const Bio = () => {
  return (
    <div id="home" className="h-screen sm:min-h-[650px] w-full bg-green-500">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center font-bold z-[2]">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Selamat Datang di Riceboard
          </h2>
          <p className="text-gray-800 py-4 max-w-md">
            Mengatasi tantangan keberlanjutan secara global. Riceboard
            memberikan konsultasi, saran, dan solusi teknologi untuk
            masalah-masalah yang berkaitan dengan pertanian, keberlanjutan, dan
            lainnya. Pendekatan pemecahan masalah kami menggunakan penginderaan
            jauh dan machine learning, mengefektifkan dan mengefisienkan waktu
            dan sumber daya yang dibutuhkan untuk memprediksi produksi tanaman
            padi.
          </p>
          <div>
            <Link
              href="/"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-400 cursor-pointer"
            >
              KE APLIKASI
              <span className="group-hover:translate-x-1 delay-75 duration-300">
                <FaLongArrowAltRight className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div className="absolute sm:right-32 mt-32 sm:w-2/5 md:w-3/4 z-[1] max-w-screen-sm">
          <img src="/demo.png" alt="My Profile" className="rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

export default Bio
