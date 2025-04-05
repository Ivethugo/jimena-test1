import { JSX } from "react";
import { Countdown, FlowersCircle } from "../index.ts";

export function Begin(): JSX.Element {
  return (
    <div className="w-full flex flex-col gap-5 pb-28">
      <FlowersCircle />
      <Countdown />
    </div>
  );
}
