"use client"

import { AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Modal } from "./modal"

export const AddItem = () => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)
  const [name, setName] = useState("")
  const [ndvi, setNDVI] = useState(null)
  const [lst, setLST] = useState(null)
  const [tci, setTCI] = useState("Kosong")

  const handleSubmitMap = async (e) => {
    e.preventDefault()
    try {
      console.log("tci = ", tci)
      const body = new FormData()
      body.append("name", name)
      body.append("ndvi", ndvi)
      body.append("lst", lst)
      body.append("tci", tci)
      console.log(...body)
      const response = await fetch("http://localhost:5000/maps", {
        method: "POST",
        body: body,
      })
      window.location = "/CRUD"

      // console.log(arrayName, arrayFile)

      console.log("ini response", response)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Tambah Peta Baru <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitMap}>
          <h3 className="font-bold text-lg text-gray-200">Tambah Peta Baru</h3>
          <div className="modal-action flex flex-col flex-start text-left">
            <div className="w-full mb-1 ml-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Masukan Nama Peta"
                className="w-[93%] pl-5 mb-1 file-input file-input-bordered align-middle required"
                required
              />
              <div>
                <label className="text-gray-300">
                  Peta Tutupan Vegetasi : NDVI
                </label>
              </div>
              <input
                onChange={(e) => setNDVI(e.target.files[0])}
                type="file"
                className="file-input file-input-bordered mr-3 mb-1 align-middle"
                // required
              />
            </div>
            <div className="w-full mb-1">
              <div>
                <label className="text-gray-300">
                  Peta Suhu Permukaan : LST
                </label>
              </div>
              <input
                onChange={(e) => setLST(e.target.files[0])}
                type="file"
                className="file-input file-input-bordered mr-3 mb-1 align-middle"
                // required
              />
            </div>
            <div className="w-full mb-1">
              <div>
                <label className="text-gray-300">
                  Peta Potensi Kekeringan : TCI
                </label>
              </div>
              <input
                onChange={(e) => setTCI(e.target.files[0])}
                type="file"
                className="file-input file-input-bordered mr-3 mb-1 align-middle"
                // required
              />
            </div>
            <button type="submit" className="btn mt-5 bg-gray-700">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

//file ilang di formdata?
//cara kerja multer untuk file
