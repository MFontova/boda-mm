import mm028 from "@/../public/images/MM028.webp";
import { ConfirmForm } from "@/components/ConfirmForm";
import { Hero } from "@/components/Hero";
import { getPage } from "@/notion";

export default async function Confirm() {
  const { title, description } = (await getPage('/confirm'))!
  return (
    <main>
      <Hero image={mm028} title={title} bgPositionX="50" bgPositionY="20" >
        <p>{description}</p>
      </Hero>
      <div className="content">
        <ConfirmForm/>
      </div>
    </main>
  )
}