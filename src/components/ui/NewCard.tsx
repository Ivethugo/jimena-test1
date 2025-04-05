import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Image } from "primereact/image";

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

export function NewCard({
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
  const header = (
    <div className="w-full p-5 font-lora text-2xl text-primary-light ">
      {title}
    </div>
  );

  function googleMaps({ location }: MapProps) {
    window.open(location, "_blank");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Card header={header} className="md:w-25rem text-center">
        <div>
          <Image
            src={image}
            alt="Image"
            width="250"
            preview
            imageClassName="rounded"
          />
        </div>
        <div className="flex flex-col gap-5 font-josefinSlab">
          <h1 className="font-cinzel text-primary-light font-semibold">
            {place}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <div>
              <span className="font-bold">{timeText} </span>
              {timeValue}
            </div>
            <div>
              <span className="font-bold">{addressText} </span> {addressValue}
            </div>
            <div>{addressValue2}</div>
            <div>{addressValue3}</div>
          </div>
          <Button
            type="button"
            outlined
            severity="help"
            onClick={() => googleMaps({ location })}
            className="flex justify-center items-center gap-3 p-3"
          >
            <div className="font-semibold">{textButton}</div>
            <div>
              <span className="material-symbols-outlined">{nameIcon}</span>
            </div>
          </Button>
        </div>
      </Card>
    </div>
  );
}
