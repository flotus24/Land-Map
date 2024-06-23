"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { FaLongArrowAltLeft } from "react-icons/fa"

export const Dashboard = ({
  chooseGeotiff,
  updateOpacity,
  updateOpacity2,
  updateOpacity3,
  geotiff,
  nama,
}) => {
  const [selectedMap, setSelectedMap] = useState(null)
  const [title, setTitle] = useState("kosong")
  const [maps, setMaps] = useState([])
  const [opacity, setOpacity] = useState(0.5)
  const [opacity2, setOpacity2] = useState(0.5)
  const [opacity3, setOpacity3] = useState(0.5)

  useEffect(() => {
    getMaps()
  }, [])

  const getMaps = async () => {
    try {
      const response = await fetch("http://localhost:5000/maps")
      const jsonData = await response.json()

      setMaps(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  function handleMap(selectedMap, title) {
    const maps = selectedMap.split(",")
    setSelectedMap(maps)
    setTitle(title)
  }

  function handleOpacity(opacity) {
    setOpacity(opacity)
    updateOpacity(opacity)
  }

  function handleOpacity2(opacity) {
    setOpacity2(opacity)
    updateOpacity2(opacity)
  }

  function handleOpacity3(opacity) {
    setOpacity3(opacity)
    updateOpacity3(opacity)
  }

  return (
    <div className="fixed flex flex-col text-white my-2 top-2 right-4 w-[20%] z-50 px-4 pt-2 min-w-[300px] rounded-md bg-gray-800">
      <h2 className="mx-auto">Load a GeoTIFF File</h2>

      <select
        className="select bg-gray-700 select-sm w-auto mt-3"
        onChange={(e) =>
          handleMap(e.target.value, e.target[e.target.selectedIndex].text)
        }
      >
        <option disabled selected defaultValue="Choose Platform">
          Pilih layer
        </option>
        <option value="">- Kosong - </option>
        {maps.map((map) => (
          <option value={[map.ndvi, map.lst, map.vhi]}>{map.name}</option>
        ))}
      </select>

      <div className="center duration-200 hover:scale-105 text-white w-fit mx-auto mt-5 px-3 py-1 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
        <a
          onClick={(e) => chooseGeotiff(selectedMap, title)}
          className="flex justify-between items-center w-full text-white"
        >
          Request Layer
        </a>
        {/* OPSI DOWNLOAD MAP
        <a
          href={geotiff}
          className="flex justify-between items-center w-full text-white"
          target="_blank"
          rel="noreferrer"
          download
        >
          Download Layer
        </a> */}
      </div>

      {nama && geotiff != "" && (
        <div className="mt-3">
          <label className="my-2 text-sm">
            Layer yang dipilih :{" "}
            <label className="text-green-300">{nama}</label>
          </label>
          <br />

          <label className="mt-4 text-sm">Tutupan Tanaman :</label>

          <div className="p-3 center flex justify-center">
            <input
              className="w-full"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={opacity}
              onChange={(e) => handleOpacity(e.target.value)}
            />
          </div>

          <div className="mt-2 center flex justify-center">
            <img
              src="/NDVI color ramp.svg"
              alt="NDVI color ramp"
              className="h-[60px]"
            />
          </div>

          <label className="mt-4 text-sm">Suhu Permukaan :</label>

          <div className="p-3 center flex justify-center">
            <input
              className="w-full"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={opacity2}
              onChange={(e) => handleOpacity2(e.target.value)}
            />
          </div>

          <div className="mt-2 center flex justify-center">
            <img
              src="/LST color ramp.svg"
              alt="LST color ramp"
              className="h-[60px]"
            />
          </div>

          <label className="mt-4 text-sm">Kesehatan Tanaman :</label>

          <div className="p-3 center flex justify-center">
            <input
              className="w-full"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={opacity3}
              onChange={(e) => handleOpacity3(e.target.value)}
            />
          </div>

          <div className="mt-2 center flex justify-center">
            <img
              src="/TCI color ramp.svg"
              alt="TCI color ramp"
              className="h-[60px]"
            />
          </div>
        </div>
      )}

      <div>
        <Link
          href="/Home"
          className="group mt-4 mb-2 text-gray-300 hover:text-white flex items-center w-fit rounded-md cursor-pointer"
        >
          <span className="group-hover:-translate-x-1 mr-1 delay-75 duration-300">
            <FaLongArrowAltLeft className="ml-1" />
          </span>
          Halaman Utama
        </Link>
      </div>
    </div>
  )
}
