import Envleft from "../../assets/images/env_left.png";
import Envright from "../../assets/images/env_right.png";
import OpenButton from "../../assets/images/open_button.png";

export function Welcome() {
  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      <div className="w-[200px] h-[50px] absolute z-10">
        <button className="w-full h-full relative">
          <img
            className="w-full h-full absolute top-0 left-0"
            src={OpenButton}
            alt="Open Button"
          />
          <h1 className="w-full h-full absolute -top-0 font-monteCarlo text-5xl text-secondary">
            Open
          </h1>
        </button>
      </div>

      <img
        className="w-screen h-screen absolute"
        src={Envleft}
        alt="Envelope Left"
      />

      <img
        className="w-screen h-screen absolute"
        src={Envright}
        alt="Envelope Right"
      />
    </div>
  );
}
