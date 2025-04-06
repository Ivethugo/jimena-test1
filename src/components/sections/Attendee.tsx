import { Button } from "primereact/button";
// import { useAttendeeData } from "../../store/attendee/useAttendeeData";

export function Attendee() {
  // const { name } = useAttendeeData();

  const sendMessage = () => {
    const phoneNumber = "522227160481";
    const message = encodeURIComponent(
      "¡Hola! Este es un mensaje desde mi app React."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="w-full flex flex-col items-center gap-5 pb-28">
      <div className="py-14 font-lora text-2xl text-deep-primary">
        Asistencia
      </div>

      <div className="flex flex-col gap-24">
        <div className="flex flex-col justify-center items-center font-josefinSlab font-semibold">
          <div>Te pedimos confirmar tu asistencia</div>
          <div>antes del 01 de julio</div>
        </div>

        <div className="flex flex-col items-center justify-center font-cinzel">
          <div>Hemos reservado</div>
          <div>4</div>
          <div>boletos para tí</div>
        </div>
        <div className="flex items-center justify-center font-cinzel">
          <div>Iveth Trujillo Vega</div>
        </div>
        <Button
          type="button"
          outlined
          severity="help"
          onClick={sendMessage}
          className="flex justify-center items-center gap-3 p-3"
        >
          <div className="font-semibold">Enviar Confirmación</div>
          <div>
            <span className="pi pi-whatsapp" />
          </div>
        </Button>
      </div>
    </div>
  );
}
