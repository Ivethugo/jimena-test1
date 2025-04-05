import { JSX } from "react";
import { Countdown, FlowersCircle } from "../index.ts";

export function Begin(): JSX.Element {
  return (
    <div className="w-full h-[800px] flex flex-col gap-5">
      <FlowersCircle />
      <Countdown />
    </div>
  );
}
