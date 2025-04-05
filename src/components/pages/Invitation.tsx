import { useOpenningTime } from "../../store/openning_time/useOpenningTime";
import { Begin, Introduce, Navbar, Place } from "../index.ts";

export function Invitation() {
  const { invitation } = useOpenningTime();
  return (
    <>
      {invitation && (
        <div className="w-screen h-screen flex flex-col">
          <div className=" top-0 sticky z-50">
            <Navbar />
          </div>
          <div>
            <Begin />
          </div>
          <div>
            <Introduce />
          </div>
          <div>
            <Place />
          </div>
          <div>Scheduler</div>
          <div>Attendee</div>
          <div>End</div>
        </div>
      )}
    </>
  );
}
