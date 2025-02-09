import ixurrinosBonics from "@/../public/images/ixurrinos_bonics.webp";
import { ConfirmForm } from "@/components/ConfirmForm";
import { Hero } from "@/components/Hero";
import { getPage } from "@/notion";

export default async function Confirm() {
  const { title, description } = (await getPage('/confirm'))!
  return (
    <main>
      <Hero image={ixurrinosBonics} title={title} bgPositionX="50" bgPositionY="20" >
        <p>{description}</p>
      </Hero>
      <div className="content">
        <ConfirmForm/>
      </div>
    </main>
  )
}