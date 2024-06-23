import React from "react"
import { CiMap } from "react-icons/ci"
import { FaFileDownload, FaRegChartBar } from "react-icons/fa"

const Features = () => {
  const features = [
    {
      id: 1,
      src: "/dataindoss.PNG",
      desc: "Visualisasi peta untuk melihat kondisi vegetasi.",
    },
    {
      id: 2,
      src: "/ocors.PNG",
      desc: "Download peta untuk digunakan pengguna.",
    },
    {
      id: 3,
      src: "/deteksicovid.PNG",
      desc: "Melakukan prediksi berdasarkan masukan pengguna.",
    },
  ]

  return (
    <div
      id="features"
      className="w-full text-white md:h-[66vh] sm:min-h-[515px] bg-gray-800"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Features
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-20 sm:pb-0">
          <div className="flex flex-col items-center justify-center ">
            <CiMap size={100} />
            <div className="sm:h-[220px] mt-3">
              <p className="py-3 px-3 text-center text-xl">
                Visualisasi peta untuk melihat kondisi vegetasi.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <FaFileDownload size={100} />
            <div className="sm:h-[220px] mt-3">
              <p className="py-3 px-3 text-center text-xl">
                Download peta untuk digunakan pengguna.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <FaRegChartBar size={100} />
            <div className="sm:h-[220px] mt-3">
              <p className="py-3 px-3 text-center text-xl">
                Melakukan prediksi berdasarkan masukan pengguna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
