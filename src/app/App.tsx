import { useEffect } from "react";
import { useAttendeeData } from "../store/attendee/useAttendeeData.ts";
import { Invitation, Preloading, Welcome, Audio } from "../components/index.ts";
import { useOpenningTime } from "../store/openning_time/useOpenningTime.ts";
import data from "../assets/data/attendees.json";

export default function App() {
  const { setCode, setName, setTickets } = useAttendeeData();
  const { invitation } = useOpenningTime();

  useEffect(() => {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const code = params.get("code");
    const foundAttendee = data.find((attendee) => attendee.code === code);
    if (foundAttendee) {
      setCode(code || "");
      setName(foundAttendee.name || "");
      setTickets(foundAttendee.tickets || 0);
    } else {
      setCode("");
      setName("");
      setTickets(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen h-screen relative">
      <Audio />
      <Preloading />
      {invitation === true ? <Invitation /> : <Welcome />}
    </div>
  );
}
