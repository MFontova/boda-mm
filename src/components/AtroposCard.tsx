"use client"

// import Atropos from "atropos/react"
import { StaticImageData } from "next/image"
import Link from "next/link"

interface Props {
  image: StaticImageData,
  title: string,
  href: string
}

export const AtroposCard = ({title, image, href}: Props) => {
  return (
    <div className="w-full" >
      <Link href={href} style={
        {
          backgroundImage: `url(${image.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }
      } className="w-full h-52 flex justify-center items-center rounded-lg bg-black/50 bg-blend-overlay">
        <h3 className="text-4xl font-bold text-white text-center" > {title} </h3>
      </Link>
    </div>
  )
}