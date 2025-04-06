import BackgroundImage from "../../assets/images/bg-white-purple.jpg";
import { ScrollRevealEffect } from "../index.ts";

export function Introduce() {
  return (
    <>
      <div
        className="w-full flex flex-col gap-5 py-28 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="font-elsie text-deep-text  flex flex-col gap-10">
          <ScrollRevealEffect
            rootMargin="0px 0px -100px 0px"
            transition={{ duration: 1 }}
            direction="left"
          >
            <div className="flex flex-col justify-center items-center font-monteCarlo text-4xl text-violet900">
              <div>Con la bendición de Dios</div>
              <div>y en compañía de mis</div>
              <div>padres y padrinos</div>
            </div>
          </ScrollRevealEffect>
          <ScrollRevealEffect
            rootMargin="0px 0px -100px 0px"
            transition={{ duration: 1 }}
            direction="right"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="font-monteCarlo text-4xl ">Mis Padres</div>
              <div className="font-lora text-deep-primary">
                Victor Ortega Lopéz
              </div>
              <div className="font-lora text-deep-primary">
                Norma Angelica Trujillo Vega
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <div className="font-monteCarlo text-4xl text-violet900">
                Mis Padrinos
              </div>
              <div className="font-lora text-deep-primary">
                Iveth Trujillo Vega
              </div>
              <div className="font-lora text-deep-primary">
                Hugo Barrera Martínez
              </div>
            </div>
          </ScrollRevealEffect>
          <ScrollRevealEffect
            rootMargin="0px 0px -100px 0px"
            transition={{ duration: 1 }}
            direction="left"
          >
            <div className="flex flex-col justify-center items-center font-monteCarlo text-4xl text-violet900">
              <div>Nos complace invitarte a</div>
              <div>ser parte de este gran día.</div>
            </div>
          </ScrollRevealEffect>
        </div>
      </div>
    </>
  );
}
