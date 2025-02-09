import { StaticImageData } from "next/image"
import { ReactNode } from "react"

interface Props {
  title: string,
  image: StaticImageData,
  children?: ReactNode,
  bgPositionX?: string,
  bgPositionY?: string,
}

export const Hero = ({title, image, children, bgPositionX = '50', bgPositionY = '50'}: Props) => {
  return (
      <div style={
        {
          backgroundImage: `url(${image.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: `${bgPositionX}%`,
          backgroundPositionY: `${bgPositionY}%`
        }
      } className="flex flex-col text-center items-center justify-center gap-4 p-5 h-96 text-white bg-center bg-cover bg-black/50 bg-blend-overlay">
        <h1 className="text-5xl font-extrabold"> {title} </h1>
        {children}
      </div>
  )
}