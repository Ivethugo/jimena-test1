import { CardTimeline, Timeline } from "../index.ts";
import GoldStarts from "../../assets/images/fondo-dorado-largo.png";
import Church from "../../assets/svg/church.svg";
import Reception from "../../assets/svg/reception.svg";
import Vals from "../../assets/svg/vals.svg";
import Dinner from "../../assets/svg/dinner.svg";
import Party from "../../assets/svg/party.svg";
import End from "../../assets/svg/end.svg";

export function Scheduler() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 pb-28 px-5 relative">
      <img src={GoldStarts} alt="GoldStarts" className="absolute top-0" />
      <div className="font-lora text-4xl text-deep-primary">Itinerario</div>
      <div className="relative h-full w-full flex flex-col items-center">
        <div className="absolute">
          <Timeline />
        </div>

        <div className="flex flex-col gap-10">
          <CardTimeline
            img1={Church}
            text1="CEREMONIA"
            text11="7:00 pm"
            img2={Reception}
            text2="RECEPCIÓN"
            text22="7:00pm"
          />
          <CardTimeline
            img1={Vals}
            text1="VALS"
            text11="7:00pm"
            img2={Dinner}
            text2="CENA"
            text22="7:00pm"
          />
          <CardTimeline
            img1={Party}
            text1="FIESTA"
            text11="7:00pm"
            img2={End}
            text2="FIN DEL EVENTO"
            text22="7:00pm"
          />
        </div>
      </div>
    </div>
  );
}
