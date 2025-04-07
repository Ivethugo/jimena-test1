import { Card, ScrollRevealEffect } from "../index.ts";
import Church from "../../assets/images/church.jpg";
import Reception from "../../assets/images/reception.jpg";
import BackgroundImage from "../../assets/images/bg-indigo-light-h.png";

export function Place() {
  return (
    <section id="places-section">
      <div
        className="w-full flex flex-col justify-center items-center gap-12 pb-28 px-5 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="pt-14 title">¿Dónde y Cuando?</div>

        <ScrollRevealEffect
          rootMargin="0px 0px -100px 0px"
          transition={{ duration: 1 }}
          direction="left"
        >
          <Card
            title="CEREMONIA"
            place="TEMPLO DE LA DIVINA MISERICORDIA"
            image={Church}
            timeText="Hora:"
            timeValue="7:00pm"
            addressText="Dirección:"
            addressValue="Esq. Iturbide, M. Hidalgo,"
            addressValue2="16 de Septiembre Sur, 72590 Heroica"
            addressValue3="Puebla de Zaragoza, Pue."
            textButton="¿COMO LLEGAR?"
            nameIcon="pin_drop"
            location="https://maps.app.goo.gl/9VwjJPpLG6ABpgWA6"
          />
        </ScrollRevealEffect>
        <ScrollRevealEffect
          rootMargin="0px 0px -100px 0px"
          transition={{ duration: 1 }}
          direction="right"
        >
          <Card
            title="RECEPCIÓN"
            place="RECEPCIONES STARDUST ELITE"
            image={Reception}
            timeText="Hora:"
            timeValue="8:30pm"
            addressText="Dirección:"
            addressValue="Blvrd Circunvalacíon B, Bugambilias"
            addressValue2="3ra secc, 72580"
            addressValue3="Puebla de Zaragoza, Pue."
            textButton="¿COMO LLEGAR?"
            nameIcon="pin_drop"
            location="https://maps.app.goo.gl/DYCCbs22jnnkM5919"
          />
        </ScrollRevealEffect>
      </div>
    </section>
  );
}
