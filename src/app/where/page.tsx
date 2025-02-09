import { Hero } from "@/components/Hero";
import comdals from "@/../public/images/comdals.webp"
import { getPage } from "@/notion";

export default async function Where() {
  const { title, description } = (await getPage('/where'))!
  return (
    <main>
      <Hero title={title} image={comdals} >
        <p>{description}</p>
      </Hero>
      <div className="content">
        <section className="py-10 flex flex-col gap-10">
          <p className="font-semibold text-2xl max-w-md text-center m-auto">Els Comdals, el lloc que hem escollit per casar-nos, és una finca situada a Cervera, La Segarra, que data del segle XII. Esperem que us agradi tant com a nosaltres.</p>
          <iframe 
            className="w-full" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.9166854671666!2d1.306052575893119!3d41.657542071266896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a42394c0bdba89%3A0xd051595b0d1e93c0!2sEls%20Comdals%20Restaurant!5e0!3m2!1ses!2ses!4v1732470712564!5m2!1ses!2ses" 
            width="300" 
            height="450" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </main>
  )
}