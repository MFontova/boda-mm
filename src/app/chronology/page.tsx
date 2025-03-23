import mm010 from "@/../public/images/MM010.webp";
import { Hero } from "@/components/Hero";
import { getPage, getTimming } from "@/notion";

interface ChronoType {
  title: string,
  time: string
}

export default async function Chronology() {
  const { title, description } = (await getPage('/chronology'))!
  const timming = await getTimming()
  console.log('timming', timming)
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
      <Hero title={title} image={mm010}>
        <p>{description}</p>
      </Hero>
      <div className="content font-semibold">
        <section className="py-10 flex flex-col max-w-md m-auto">
          {
            timming.reverse().map((t, index) => (
              <div className="grid grid-cols-2 gap-x-8 items-center" key={t!.title}>
                <p className="text-end text-4xl"> {t!.time} </p>
                <p className="text-start"> {t!.title} </p>
                {index < chronology.length - 1 && <p className="text-center text-5xl pe-10 font-normal col-span-2">|</p>}
              </div>
            ))
          }
        </section>
      </div>
    </main>
  )
}