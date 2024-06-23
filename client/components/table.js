"use client"

import React, { useState } from "react"
import { Modal } from "./modal"
import Swal from "sweetalert2"
import fs from "fs"

export const Table = ({ map }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalDeleted, setOpenModalDeleted] = useState(false)
  const [name, setName] = useState(map.name)

  const handleEditMap = async (e) => {
    e.preventDefault()
    try {
      const id = map.map_id
      const body = { name }
      const response = await fetch(`http://localhost:5000/maps/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      console.log("ini body", body)
      window.location = "/CRUD"

      console.log("ini response", response)
    } catch (err) {
      console.error(err.message)
    }
  }

  function handleDeleteMap(id, name) {
    Swal.fire({
      title: `Apakah anda yakin ingin menghapus ${name}?`,
      showDenyButton: true,
      confirmButtonText: "Iya",
      denyButtonText: `Tidak`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Berhasil!", "", "success").then((res) => {
          deleteMap(id)
        })
      } else if (result.isDenied) {
      }
    })
  }

  const deleteMap = async (id) => {
    try {
      console.log("ini id ", id)
      const deleteMap = await fetch(`http://localhost:5000/maps/${id}`, {
        method: "DELETE",
      })
      setOpenModalDeleted(false)
      window.location = "/CRUD"
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <tr key={map.map_id}>
      <td>{map.name}</td>

      <td>
        <button
          className="btn btn-danger"
          onClick={() => setOpenModalEdit(true)}
        >
          Edit
        </button>
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleEditMap}>
            <h3 className="font-bold text-lg">Edit Map</h3>
            <div className="modal-action">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </td>

      <td>
        <button
          className="btn btn-danger"
          // onClick={() => handleDeleteMap(map.map_id)}
          onClick={() => handleDeleteMap(map.map_id, map.name)}
        >
          Delete
        </button>
        {/* <Modal
                  modalOpen={openModalDeleted}
                  setModalOpen={setOpenModalDeleted}
                  id={map.map_id}
                >
                  <h3 className="text-lg">
                    Apakah anda yakin untuk menghapus peta ini?
                  </h3>
                  <div className="modal-action flex justify-center">
                    <button
                      onClick={() => deleteMap(map.map_id)}
                      className="btn bg-green-500 hover:bg-green-600 text-white"
                    >
                      Iya
                    </button>
                    <button
                      onClick={() => setOpenModalDeleted(false)}
                      className="btn bg-red-500 hover:bg-red-600 text-white"
                    >
                      Tidak
                    </button>
                  </div>
                </Modal> */}
      </td>
    </tr>
  )
}
