import comdals from "@/../public/images/comdals.webp";
import mm009 from "@/../public/images/MM009.webp";
import mm010 from "@/../public/images/MM010.webp";
import mm017 from "@/../public/images/MM017.webp";
import mm027 from "@/../public/images/MM027.webp";
import mm028 from "@/../public/images/MM028.webp";
import { AtroposCard } from "@/components/AtroposCard";
import { RemainingDays } from "@/components/Badge";
import { Hero } from "@/components/Hero";
import { getPage } from "@/notion";

export default async function Home() {
  const { title } = (await getPage('/'))!

  return (
    <main>
      <Hero title={title} image={mm009}>
        <p>Falten</p>
        <RemainingDays/>
      </Hero>
      <div className="content">
        <section className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-10 py-5 md:py-10">
          <AtroposCard image={comdals} title="El lloc" href="/where" />
          <AtroposCard image={mm010} title="Cronograma" href="/chronology" />
          <AtroposCard image={mm027} title="Codi de vestimenta" href="/dressCode" />
          <AtroposCard image={mm017} title="Regal" href="/regal" />
          <AtroposCard image={mm028} title="Confirmar assistència" href="/confirm" />
          {/* <AtroposCard image={cascadaBoira} title="Confirmar assistència" href="/confirm" /> */}
        </section>
      </div>
    </main>
  );
}
