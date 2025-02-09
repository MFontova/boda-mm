import Image from "next/image"
import logo from "@/../public/images/logo.svg"

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-3 justify-center p-10 border-t">
      <Image src={logo} alt="Logo MM" height={100} />
      <small className="text-sm font-semibold">Fet amb ❤️ per la Mariona i el Marc</small>
    </footer>
  )
}