import Butterfly from "../../assets/gifs/butterfly-animation.gif";

export function Preloading() {
  return (
    <div className="h-screen w-screen bg-white opacity-95 flex justify-center items-center">
      <div className="relative">
        <h1 className="name">Samantha</h1>
        <img
          className="h-16 w-16 absolute  -top-7 right-1"
          src={Butterfly}
          alt="Butterfly Animation"
        />
      </div>
    </div>
  );
}
