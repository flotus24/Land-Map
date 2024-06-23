import React from "react"

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-[75vh] sm:min-h-[550px] text-white bg-green-500"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl sm:text-5xl text-center font-bold border-gray-500">
            Contact
          </p>
          <p className="pt-6 text-center">
            Kirimkan formulir di bawah ini untuk menghubungi saya
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/878864e4-fd77-4dfe-be31-7d859c3af2bd"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Masukan nama"
              className="p-2 bg-transparent text-white placeholder-white border-b-2 outline-none focus:border-b-4 focus:border-b-blue-500 delay-100 duration-100"
            />
            <input
              type="text"
              name="email"
              placeholder="Masukkan email"
              className="my-4 p-2 bg-transparent text-white placeholder-white border-b-2 outline-none focus:border-b-4 focus:border-b-blue-500 delay-100 duration-100"
            />
            <textarea
              name="message"
              placeholder="Masukkan pesan"
              rows={2}
              className="p-2 bg-transparent text-white placeholder-white border-b-2 outline-none resize-none focus:border-b-4 focus:border-b-blue-500 delay-100 duration-100"
            ></textarea>
            <button className="text-white bg-cyan-500 hover:bg-blue-500 px-6 py-3 mb-8 mt-10 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Let&apos;s Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
