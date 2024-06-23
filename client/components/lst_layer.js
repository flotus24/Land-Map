import React, { useEffect, useState } from "react"
import { useMap } from "react-leaflet"
import parse_georaster, { GeoRaster } from "georaster"
import GeoRasterLayer from "georaster-layer-for-leaflet"

export function LSTLayer({ geotiff, mask, handleLSTLayer }) {
  // useEffect(() => {
  //   testing(layer)
  // }, [])

  const map = useMap()

  fetch(geotiff)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => {
      parse_georaster(arrayBuffer).then((georaster) => {
        console.log("georaster:", georaster)
        console.log("geotiff", geotiff)

        /*
            GeoRasterLayer is an extension of GridLayer,
            which means can use GridLayer options like opacity.

            Just make sure to include the georaster option!

            Optionally set the pixelValuesToColorFn function option to customize
            how values for a pixel are translated to a color.

            https://leafletjs.com/reference.html#gridlayer
        */
        var layer = new GeoRasterLayer({
          georaster: georaster,
          opacity: 0.5,
          //   pixelValuesToColorFn: (values) =>
          //        values[0] === 42 ? "#ffffff" : "#000000",
          resolution: 16, // optional parameter for adjusting display resolution
          mask: mask,
        })
        console.log("layer = ", layer)
        layer.addTo(map)
        handleLSTLayer(layer)

        map.fitBounds(layer.getBounds())
      })
    })

  return null
}
