import { useEffect } from "react";
import { useAttendeeData } from "../store/attendee/useAttendeeData.ts";
import { Invitation, Preloading, Welcome } from "../components/index.ts";
import { useOpenningTime } from "../store/openning_time/useOpenningTime.ts";

function App() {
  const { setName } = useAttendeeData();
  const { welcome, invitation } = useOpenningTime();

  useEffect(() => {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const name = params.get("nombre");
    setName(name || "");
    console.log(name);
  }, [setName]);

  return (
    <div className="w-screen h-screen relative">
      {welcome === true ? (
        invitation !== true ? (
          <Welcome />
        ) : (
          <Invitation />
        )
      ) : (
        <Preloading />
      )}
    </div>
  );
}

export default App;
