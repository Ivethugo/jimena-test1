import Flowers from "../../assets/images/flawers.png";
export function End() {
  return (
    <div className="flex flex-col justify-center items-center font-monteCarlo text-5xl text-deep-primary pt-10 relative">
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
