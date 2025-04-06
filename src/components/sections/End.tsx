import Flowers from "../../assets/images/flawers.png";
import Butterfly from "../../assets/gifs/butterfly-animation.gif";

export function End() {
  return (
    <div className="flex flex-col justify-center items-center font-monteCarlo text-5xl text-deep-primary pt-10 relative">
      <div>
        <img
          className="h-16 w-16 absolute top-34 left-16"
          src={Butterfly}
          alt="Butterfly Animation"
        />
      </div>
      <div className="absolute top-64 left-40">
        <div>¡Te</div>
        <div>Esperamos!</div>
      </div>
      <div className="top-40 absolute">
        <img src={Flowers} alt="Flowers" />
      </div>
    </div>
  );
}
