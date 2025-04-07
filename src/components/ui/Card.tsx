import { Button } from "primereact/button";
import { Image } from "primereact/image";
import BackgroundImage from "../../assets/images/card-h.png";

type CardProps = {
  title: string;
  place: string;
  image: string;
  timeText: string;
  timeValue: string;
  addressText: string;
  addressValue: string;
  addressValue2: string;
  addressValue3: string;
  textButton: string;
  nameIcon: string;
  location: string;
};

type MapProps = {
  location: string;
};

export function Card({
  title,
  place,
  image,
  timeText,
  timeValue,
  addressText,
  addressValue,
  addressValue2,
  addressValue3,
  textButton,
  nameIcon,
  location,
}: CardProps) {
  function googleMaps({ location }: MapProps) {
    window.open(location, "_blank");
  }

  return (
    <div
      className="w-[320px] h-[560px] p-2 border border-gray-200 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden transition-shadow duration-300 bg-cover bg-no-repeat flex flex-col items-center gap-5"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="card-title">{title}</div>
      <div className="">
        <Image
          src={image}
          alt="Image"
          width="250"
          preview
          imageClassName="inline-block transform-gpu rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-5 font-josefinSlab">
        <h1 className="card-mid-title text-center">{place}</h1>
        <div className="flex flex-col justify-center items-center">
          <div>
            <span className="font-bold text-center">{timeText} </span>
            {timeValue}
          </div>
          <div className="text-center">
            <span className="font-bold text-center">{addressText} </span>
            {addressValue}
          </div>
          <div className="text-center">{addressValue2}</div>
          <div className="text-center">{addressValue3}</div>
        </div>
        <div className="flex justify-center">
          <Button
            type="button"
            outlined
            severity="help"
            onClick={() => googleMaps({ location })}
            className="flex justify-center items-center"
          >
            <div className="font-semibold">{textButton}</div>
            <div>
              <span className="material-symbols-outlined">{nameIcon}</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
