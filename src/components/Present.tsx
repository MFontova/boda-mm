"use client"

import { useState } from "react"

interface Props {
  present: {
    title: string,
    description: string,
    account: string,
  }
}

export const Present = ({present} : Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function switchModal() {
    setIsModalOpen(prev => !prev)
  }
  return (
    <>
      <button onClick={switchModal} className="px-5 py-2 border rounded-md">
        <p>{present.title}</p>
      </button>
      {
        isModalOpen && (
          <section className="fixed inset-0 flex justify-center items-center bg-black/50 p-10 z-0" onClick={switchModal}>
            <div onClick={(e) => e.stopPropagation()} className="bg-white inset-10 w-full rounded-md shadow-md p-5 flex flex-col gap-5 z-10">
              <h3 className="font-bold text-4xl underline">{present.title}</h3>
              <p className="prose text-left text-xl mx-auto">{present.description}</p>
              <p className="prose text-left text-xl mx-auto">{present.account}</p>
              <p className="prose text-left text-3xl font-semibold mx-auto">ES82 2100 3073 6122 0063 8020</p>
            </div>
          </section>
        )
      }
    </>
  )
}