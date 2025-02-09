"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  href: string,
  title: string,
}

export const MenuLink = ({href, title}: Props) => {
  const pathname = usePathname()
  
  return (
    <Link href={href} className={`${pathname === href && 'underline'} text-white font-bold hover:text-gray-300 transition-all`} > {title} </Link>
  )
}