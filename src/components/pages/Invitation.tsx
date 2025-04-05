import { useOpenningTime } from "../../store/openning_time/useOpenningTime";
import { Begin, Navbar } from "../index.ts";

export function Invitation() {
  const { invitation } = useOpenningTime();
  return (
    <>
      {invitation && (
        <div className="w-screen h-screen flex flex-col gap-1">
          <div>
            <Navbar />
          </div>
          <div>
            <Begin />
          </div>
          <div className="bg-blue-400">Introduce</div>
          <div>Places</div>
          <div>Scheduler</div>
          <div>Attendee</div>
          <div>End</div>
        </div>
      )}
    </>
  );
}
