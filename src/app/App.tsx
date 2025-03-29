import { useEffect } from "react";
import { useAttendeeData } from "../store/attendee/useAttendeeData.ts";
import { Preloading } from "../components/ui/Preloading.tsx";

function App() {
  const { setName } = useAttendeeData();

  useEffect(() => {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const name = params.get("nombre");
    setName(name || "");

    console.log(name);
  }, [setName]);

  return (
    <div className="w-screen h-screen relative">
      <Preloading />
      <div className="w-screen h-screen absolute top-0 left-0 text-3xl font-bold underline -z-1">
        <h1>Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
