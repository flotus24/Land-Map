"use client"

import React, { useState, useEffect } from "react"
import { AddItem } from "@/components/add_item"
import { Table } from "@/components/table"

export default function CRUD() {
  const [maps, setMaps] = useState([])

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

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Kelola Peta GeoTIFF</h1>
        <AddItem />
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {maps.map((map) => (
              <Table map={map} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
