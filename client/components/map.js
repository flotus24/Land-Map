"use client"

import React, { useState, useEffect } from "react"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  Circle,
} from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-cluster"
import { EditControl } from "react-leaflet-draw"
import { Dashboard } from "@/components/dashboard"
import { NDVILayer } from "@/components/ndvi_layer"
import { LSTLayer } from "@/components/lst_layer"
import { TCILayer } from "@/components/tci_layer"
import "leaflet/dist/leaflet.css"
import "leaflet-draw/dist/leaflet.draw.css"

export default function Alpha() {
  const [ndvi, setNDVI] = useState(null)
  const [lst, setLST] = useState(null)
  const [tci, setTCI] = useState(null)
  const [nama, setNama] = useState(null)
  const [geojson, setGeojson] = useState(null)
  var layer, layer2, layer3

  // const markers = [
  //   {
  //     geocode: [-7.0348864487501235, 107.70979205545923],
  //     popUp: "Kecamatan Ciparay",
  //   },
  //   {
  //     geocode: [-7.051728142735185, 107.7459885861163],
  //     popUp: "Kecamatan Majalaya",
  //   },
  //   {
  //     geocode: [-7.06654313074123, 107.79626994667821],
  //     popUp: "Kecamatan Paseh",
  //   },
  //   {
  //     geocode: [-7.027437649255725, 107.82304516667428],
  //     popUp: "Kecamatan Cikancung",
  //   },
  // ]

  // const customIcon = new Icon({
  //   iconUrl: "marker.svg",
  //   iconSize: [50, 50],
  // })

  // const createCustomeClusterIcon = (cluster) => {
  //   return new divIcon({
  //     html: `<span>${cluster.getChildCount()}</span>`,
  //     className:
  //       "h-10 w-10 flex text-center p-1 items-center justify-center rounded-full bg-red-600 text-white text-lg font-bold",
  //     iconSize: point(33, 33, true),
  //   })
  // }

  useEffect(() => {
    const ndvi = window.sessionStorage.getItem("ndvi")
    const lst = window.sessionStorage.getItem("lst")
    const tci = window.sessionStorage.getItem("tci")
    const nama = window.sessionStorage.getItem("nama")
    let geojson = window.sessionStorage.getItem("geojson")
    geojson = JSON.parse(geojson)
    setNDVI(ndvi)
    setLST(lst)
    setTCI(tci)
    setNama(nama)
    setGeojson(geojson)
    console.log("ini geojson, ", geojson)
  }, [])

  function chooseGeotiff(tiff, nama) {
    sessionStorage.setItem("ndvi", tiff[0])
    sessionStorage.setItem("lst", tiff[1])
    sessionStorage.setItem("tci", tiff[2])
    sessionStorage.setItem("nama", nama)
    window.location.reload(false)
  }

  function handleNDVILayer(ndvi) {
    layer = ndvi
  }

  function updateOpacity(opacity) {
    layer.setOpacity(opacity)
  }

  function handleLSTLayer(lst) {
    layer2 = lst
  }

  function updateOpacity2(opacity) {
    layer2.setOpacity(opacity)
  }

  function handleTCILayer(tci) {
    layer3 = tci
  }

  function updateOpacity3(opacity) {
    layer3.setOpacity(opacity)
  }

  const _onCreated = (e) => {
    const layer = e.layer
    let geojson = layer.toGeoJSON()
    geojson = JSON.stringify(geojson)
    sessionStorage.setItem("geojson", geojson)
  }

  const _onDeleted = (e) => {
    sessionStorage.setItem("geojson", null)
    window.location.reload(false)
  }

  return (
    <div className="relative">
      <MapContainer
        center={[-4.772513754177117, 110.49499159661778]}
        zoom={7}
        className="h-screen z-0 relative"
      >
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <NDVILayer
          geotiff={ndvi}
          mask={geojson}
          handleNDVILayer={handleNDVILayer}
        />
        <LSTLayer
          geotiff={lst}
          mask={geojson}
          handleLSTLayer={handleLSTLayer}
        />
        <TCILayer
          geotiff={tci}
          mask={geojson}
          handleTCILayer={handleTCILayer}
        />
        {/* <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomeClusterIcon}
        >
          {markers.map((marker) => (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup> */}
        <FeatureGroup>
          <EditControl
            position="topleft"
            onCreated={_onCreated}
            onDeleted={_onDeleted}
            draw={{
              rectangle: false,
              polyline: false,
              circle: false,
              circlemarker: false,
              marker: false,
            }}
            edit={{ edit: false }}
          />
          <Circle center={[51.51, -0.06]} radius={200} />
        </FeatureGroup>
      </MapContainer>
      <Dashboard
        chooseGeotiff={chooseGeotiff}
        updateOpacity={updateOpacity}
        updateOpacity2={updateOpacity2}
        updateOpacity3={updateOpacity3}
        geotiff={ndvi}
        nama={nama}
      />
    </div>
  )
}
