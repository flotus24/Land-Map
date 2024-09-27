"use client"

import React from "react"
import dynamic from "next/dynamic"

const Map = dynamic(() => import("@/components/map"), { ssr: false })

export default function Alpha() {
  return <Map />
}
