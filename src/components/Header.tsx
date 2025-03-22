import Link from "next/link"
import { Menu } from "./Menu"
import Image from "next/image"
import logo from "@/../public/images/logo.svg"
// import { MenuLink } from "./MenuLink"

export const Header = () => {
  return (
    <header className="flex justify-evenly items-center gap-5 md:gap-10 md:justify-center absolute top-0 w-full text-xl font-bold">
      <Link href="/" className="m-3">
        <Image src={logo} alt="Mariona i Marc" style={{filter: "invert(1)"}} height={75} />
      </Link>
      <Menu/>
    </header>
  )
}