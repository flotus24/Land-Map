import React from "react"

const About = () => {
  return (
    <div id="about" className="w-full h-[50vh] sm:min-h-[375px] bg-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-800 font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl text-gray-500 mt-10">
          Riceboard singkatan dari Rice Dashboard, adalah website dengan fondasi
          leaflet. Leaflet merupakan library javascript open source untuk
          membuat aplikasi peta di website. Rice kata dari bahasa inggris yang
          artinya nasi dimana tujuan utama dari website berbentuk dashboard kami
          memudahkan pencarian peta geospasial yang bisa digunakan pengguna
          untuk analisis sekaligus melakukan prediksi produksi tanaman padi.
          Ricelet adalah website yang dibuat mahasiswa Universitas Pendidikan
          Indonesia untuk memenuhi mata kuliah skripsi Ilmu Komputer.
        </p>
      </div>
    </div>
  )
}

export default About
