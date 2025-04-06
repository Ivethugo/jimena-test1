import { NewCard, ScrollRevealEffect } from "../index.ts";
import Church from "../../assets/images/church.jpg";
import Reception from "../../assets/images/reception.jpg";

export function Place() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 pb-28 px-5">
      <div className="pt-14 font-lora text-2xl text-deep-primary">
        ¿DÓNDE Y CUANDO?
      </div>
      <ScrollRevealEffect
        rootMargin="0px 0px -100px 0px"
        transition={{ duration: 1 }}
        direction="left"
      >
        <NewCard
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
        <NewCard
          title="RECEPCIÓN"
          place="RECEPCIONES STARDUST ELITE"
          image={Reception}
          timeText="Hora:"
          timeValue="8:30pm"
          addressText="Dirección:"
          addressValue="Blurd Circunvalacíon B, Buganbilias"
          addressValue2="3ra secc, 72580"
          addressValue3="Puebla de Zaragoza, Pue."
          textButton="¿COMO LLEGAR?"
          nameIcon="pin_drop"
          location="https://maps.app.goo.gl/DYCCbs22jnnkM5919"
        />
      </ScrollRevealEffect>
    </div>
  );
}
