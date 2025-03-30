import { useEffect, useState } from "react";
import { useAttendeeData } from "../store/attendee/useAttendeeData.ts";
import { Preloading, Welcome } from "../components/index.ts";

function App() {
  const { setName } = useAttendeeData();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const name = params.get("nombre");
    setName(name || "");

    console.log(name);
  }, [setName]);

  return (
    <div className="w-screen h-screen relative">
      {loading === true ? <Preloading /> : null}
      <div className="w-screen h-screen absolute top-0 left-0 -z-1">
        <Welcome />
      </div>
    </div>
  );
}

export default App;
