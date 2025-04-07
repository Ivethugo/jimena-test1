import { JSX } from "react";
import { Countdown, FlowersCircle } from "../index.ts";
import BackgroundImage from "../../assets/images/bg-indigo-light-h.png";

export function Begin(): JSX.Element {
  return (
    <section id="begin-section">
      <div
        className="w-full flex flex-col gap-5 pb-28 relative bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <FlowersCircle />
        <Countdown />
      </div>
    </section>
  );
}
