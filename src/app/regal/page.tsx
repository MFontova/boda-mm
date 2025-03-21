import { Hero } from "@/components/Hero";
import cascada from "@/../public/images/cascada.webp"
import { getPage, getPresents } from "@/notion";
import { Present } from "@/components/Present";

export default async function Regal() {
  const { title, description } = (await getPage('/regal'))!
  const presents = await getPresents()

  return (
    <main>
      <Hero image={cascada} title={title}>
        <p>{description}</p>
      </Hero>
      <div className="content font-semibold text-center">
        <section className="py-10 flex flex-col">
          <p className="lg:max-w-md mx-auto">{" Si ens vols fer un regal, però no saps quin, aquests son els nostres projectes actuals 😊"}</p>
          <p className="lg:max-w-md mx-auto">{ "Fes clic a cada un d’ells per saber-ne més." }</p>
          <div className="flex justify-center gap-10 py-10">
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