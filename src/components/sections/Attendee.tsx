import { Button } from "primereact/button";
import BackgroundImage from "../../assets/images/bg-indigo-light-h.png";
import { useAttendeeData } from "../../store/attendee/useAttendeeData.ts";

export function Attendee() {
  const { name, tickets } = useAttendeeData();

  const sendMessage = () => {
    const phoneNumber = "522227160481";
    const message = encodeURIComponent(
      `🌟 *Confirmación de asistencia*  

        👤 Nombre: *${name}*  
        🎟️ Boletos asignados: ${tickets} 
        🗓 Fecha: ${import.meta.env.VITE_DATE_STRING_CAPITAL} 

*¡Gracias por la invitación! Nos vemos pronto.* 😊`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="attendee-section">
      <div
        className="w-full flex flex-col items-center gap-5 pb-28 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="py-14 title">Asistencia</div>
        <div className="flex flex-col gap-24">
          <div className="flex flex-col justify-center items-center font-josefinSlab font-semibold">
            <div>Te pedimos confirmar tu asistencia</div>
            <div>antes del 19 de junio</div>
          </div>
          <div className="flex flex-col items-center justify-center font-cinzel">
            <div>Hemos reservado</div>
            <div>{tickets}</div>
            <div>boletos para tí</div>
          </div>
          <div className="flex items-center justify-center font-cinzel">
            <div>{name}</div>
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
    </section>
  );
}
