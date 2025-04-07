import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";

export function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="w-screen p-2 bg-white">
      <div className="container mx-auto flex justify-between lg:justify-center items-center">
        <div className="name lg:w-60 xl:w-80 lg:text-5xl">
          {import.meta.env.VITE_SHORT_NAME}
        </div>
        <div className="lg:hidden">
          <Button link icon="pi pi-bars" onClick={() => setVisible(true)} />
        </div>

        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          fullScreen={true}
          content={({ closeIconRef, hide }) => (
            <div className="flex flex-col h-full bg-white shadow-md">
              <div className="flex justify-between items-center p-5">
                <span className="name">{import.meta.env.VITE_SHORT_NAME}</span>
                <Button
                  type="button"
                  ref={closeIconRef as React.Ref<Button>}
                  onClick={(e) => hide(e)}
                  icon="pi pi-times"
                  className="hover:bg-[oklch(89.4%_0.057_293.283/0.1)]"
                  style={{ color: "hsl(255, 53%, 38%)" }}
                  rounded
                  outlined
                />
              </div>

              <div className="flex-1 flex flex-col gap-4 p-5 bg-bg">
                <Button
                  text
                  label="INICIO"
                  icon="pi pi-home"
                  className="justify-start text-lg font-bold"
                  style={{
                    color: "hsl(255, 53%, 38%)",
                    fontFamily: "var(--font-josefinSlab)",
                  }}
                  onClick={(e) => {
                    hide(e);
                    document.getElementById("begin-section")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                />
                <Button
                  text
                  label="PRESENTACIÓN"
                  icon="pi pi-user"
                  className="justify-start text-lg"
                  style={{
                    color: "hsl(255, 53%, 38%)",
                    fontFamily: "var(--font-josefinSlab)",
                  }}
                  onClick={(e) => {
                    hide(e);
                    document
                      .getElementById("introduce-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                />
                <Button
                  text
                  label="UBICACIÓN"
                  icon="pi pi-map-marker"
                  className="justify-start text-lg"
                  style={{
                    color: "hsl(255, 53%, 38%)",
                    fontFamily: "var(--font-josefinSlab)",
                  }}
                  onClick={(e) => {
                    hide(e);
                    document.getElementById("places-section")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                />
                <Button
                  text
                  label="PROGRAMA"
                  icon="pi pi-calendar"
                  className="justify-start text-lg"
                  style={{
                    color: "hsl(255, 53%, 38%)",
                    fontFamily: "var(--font-josefinSlab)",
                  }}
                  onClick={(e) => {
                    hide(e);
                    document
                      .getElementById("scheduler-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                />
                <Button
                  text
                  label="CONFIRMAR ASISTENCIA"
                  icon="pi pi-check-circle"
                  className="justify-start text-lg"
                  style={{
                    color: "hsl(255, 53%, 38%)",
                    fontFamily: "var(--font-josefinSlab)",
                  }}
                  onClick={(e) => {
                    hide(e);
                    document
                      .getElementById("attendee-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                />
                <Button
                  text
                  label="FIN"
                  icon="pi pi-power-off"
                  className="justify-start text-lg"
                  style={{
                    color: "hsl(255, 53%, 38%)",
                    fontFamily: "var(--font-josefinSlab)",
                  }}
                  onClick={(e) => {
                    hide(e);
                    document.getElementById("end-section")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                />
              </div>
            </div>
          )}
        ></Sidebar>
      </div>
    </nav>
  );
}
