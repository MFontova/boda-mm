import mm027 from "@/../public/images/MM027.webp";
import { Hero } from "@/components/Hero";
import { getPage } from "@/notion";

export default async function DressCode() {
  const { title, description } = (await getPage('/dressCode'))!
  const greens = ["#2B4420", "#1B5E20", "#4CAF50", "#81C784", "#A5D6A7"];

  return (
    <main>
      <Hero image={mm027} title={title}>
        <p>{description}</p>
      </Hero>
      <div className="content font-semibold text-center">
        <section className="py-10 flex flex-col">
          <p className="lg:max-w-md mx-auto">{"Pots venir vestit del color que vulguis, excepte de verd (és igual la tonalitat) i, per suposat, el blanc 😉"}</p>
          <div className="flex justify-center gap-5 py-10">
            {
              greens.map(g => (
                <div key={g} style={{backgroundColor: g}} className="h-20 w-20 rounded-md shadow-md" />
              ))
            }
          </div>
        </section>
      </div>
    </main>
  )
}