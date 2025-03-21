'use client'

import { CloseIcon } from "@/icons/CloseIcon"
import { MenuIcon } from "@/icons/MenuIcon"
import { useEffect, useState } from "react"
import { MenuLink } from "./MenuLink"
import { usePathname } from "next/navigation"

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <div className="text-white w-full flex justify-end">
      <span onClick={() => setMenuOpen(prev => !prev)} className="cursor-pointer p-5">
        {
          !menuOpen && <MenuIcon/>
        }
      </span>
      {
        menuOpen && (
          <div className="absolute top-0 w-screen bg-black/50 backdrop-blur-md h-screen p-5 text-white z-40">
            <div className="flex justify-end z-50">
              <span className="z-50" onClick={() => setMenuOpen(prev => !prev)}>
                <CloseIcon />
              </span>
            </div>
            <div className="flex flex-col text-4xl text-center gap-5 z-50" >
              <MenuLink href="/" title="Inici" />
              <MenuLink href="/where" title="El lloc" />
              <MenuLink href="/chronology" title="Cronograma" />
              <MenuLink href="/confirm" title="Confirmar assistència" />
            </div>
          </div>
        )
      }
    </div>
  )
}