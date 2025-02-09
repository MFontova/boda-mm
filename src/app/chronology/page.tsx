import { Hero } from "@/components/Hero";
import cascada from "@/../public/images/cascada.webp"
import { getPage } from "@/notion";

interface ChronoType {
  title: string,
  time: string
}

export default async function Chronology() {
  const { title, description } = (await getPage('/chronology'))!
  const chronology: ChronoType[] = [
    {
      title: "Arribada",
      time: "17:30",
    }, 
    {
      title: "Inici cerimònia",
      time: "18:00"
    },
    {
      title: "Aperitiu",
      time: "19:30"
    },
    {
      title: "Sopar",
      time: "22:00"
    }
  ]
  return (
    <main>
      <Hero title={title} image={cascada}>
        <p>{description}</p>
      </Hero>
      <div className="content font-semibold">
        <section className="py-10 flex flex-col max-w-md m-auto">
          {
            chronology.map((c, index) => (
              <div className="grid grid-cols-2 gap-x-8 items-center" key={c.title}>
                <p className="text-end text-4xl"> {c.time} </p>
                <p className="text-start"> {c.title} </p>
                {index < chronology.length - 1 && <p className="text-center text-5xl pe-10 font-normal col-span-2">|</p>}
              </div>
            ))
          }
        </section>
      </div>
    </main>
  )
}