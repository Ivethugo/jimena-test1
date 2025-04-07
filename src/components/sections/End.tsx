import Flowers from "../../assets/images/flawers.png";
import Butterfly from "../../assets/gifs/butterfly-animation.gif";
import BackgroundImage from "../../assets/images/bg-indigo-light-h.png";

export function End() {
  return (
    <section id="end-section">
      <div
        className="h-[600px] flex flex-col justify-center items-center title relative"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div>
          <img
            className="h-16 w-16 absolute top-34 left-16"
            src={Butterfly}
            alt="Butterfly Animation"
          />
        </div>
        <div className="absolute top-52 left-40">
          <div>¡Te</div>
          <div>Esperamos!</div>
        </div>
        <div className="top-40 absolute">
          <img src={Flowers} alt="Flowers" />
        </div>
      </div>
    </section>
  );
}
