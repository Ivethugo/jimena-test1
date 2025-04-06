import { useEffect } from "react";
import { useAttendeeData } from "../store/attendee/useAttendeeData.ts";
import { Invitation, Preloading, Welcome, Audio } from "../components/index.ts";
import { useOpenningTime } from "../store/openning_time/useOpenningTime.ts";

export default function App() {
  const { setName } = useAttendeeData();
  const { invitation } = useOpenningTime();

  useEffect(() => {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const name = params.get("nombre");
    setName(name || "");
    console.log(name);
  }, [setName]);

  return (
    <div className="w-screen h-screen relative">
      <Audio />
      <Preloading />
      {invitation === true ? <Invitation /> : <Welcome />}
    </div>
  );
}
