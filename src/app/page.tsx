import cascadaBoira from "@/../public/images/cascada_boira.webp";
import cascadaPeto from "@/../public/images/cascada_peto.webp";
import columnesRient from "@/../public/images/columnes_rient.webp";
import comdals from "@/../public/images/comdals.webp";
import { AtroposCard } from "@/components/AtroposCard";
import { RemainingDays } from "@/components/Badge";
import { Hero } from "@/components/Hero";
import { getPage } from "@/notion";

export default async function Home() {
  const { title } = (await getPage('/'))!

  return (
    <main>
      <Hero title={title} image={columnesRient}>
        <p>Falten</p>
        <RemainingDays/>
      </Hero>
      <div className="content">
        <section className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-10 py-5 md:py-10">
          <AtroposCard image={comdals} title="El lloc" href="/where" />
          <AtroposCard image={cascadaPeto} title="Cronograma" href="/chronology" />
          <AtroposCard image={cascadaBoira} title="Codi de vestimenta" href="/dressCode" />
          <AtroposCard image={cascadaBoira} title="Regal" href="/regal" />
          <AtroposCard image={cascadaBoira} title="Confirmar assistència" href="/confirm" />
          {/* <AtroposCard image={cascadaBoira} title="Confirmar assistència" href="/confirm" /> */}
        </section>
      </div>
    </main>
  );
}
