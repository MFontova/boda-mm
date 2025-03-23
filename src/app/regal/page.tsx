import mm017 from "@/../public/images/MM017.webp";
import { Hero } from "@/components/Hero";
import { Present } from "@/components/Present";
import { getPage, getPresents } from "@/notion";

export default async function Regal() {
  const { title, description } = (await getPage('/regal'))!
  const presents = await getPresents()

  return (
    <main>
      <Hero image={mm017} title={title}>
        <p>{description}</p>
      </Hero>
      <div className="content font-semibold text-center">
        <section className="py-10 flex flex-col">
          <p className="lg:max-w-md mx-auto">{" Si ens vols fer un regal, però no saps quin, aquests son els nostres projectes actuals 😊"}</p>
          <p className="lg:max-w-md mx-auto">{ "Fes clic a cada un d’ells per saber-ne més." }</p>
          <div className="flex justify-evenly py-10 gap-3">
            {
              presents.map(p => (
                <Present key={p?.title} present={p!} />
              ))
            }
          </div>
        </section>
      </div>
    </main>
  )
}