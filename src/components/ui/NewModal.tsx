/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

type NewModalProps = {
  time: number;
};
export function NewModal({ time }: NewModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, time);
    return () => clearTimeout(timer);
  }, []);

  const footerContent = (
    <div>
      <Button
        label="No"
        severity="help"
        outlined
        onClick={() => setVisible(false)}
      />
      <Button
        label="Yes"
        severity="help"
        outlined
        onClick={() => setVisible(false)}
      />
    </div>
  );

  return (
    <Dialog
      header="Confirmación"
      visible={visible}
      style={{ width: "80vw" }}
      breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      footer={footerContent}
    >
      <p className="m-0">
        ¿Deseas eschar el sonido? ¿Deseas eschar el sonido? ¿Deseas eschar el
        sonido? ¿Deseas eschar el sonido? ¿Deseas eschar el sonido? ¿Deseas
        eschar el sonido? ¿Deseas eschar el sonido? ¿Deseas eschar el sonido?
        ¿Deseas eschar el sonido? ¿Deseas eschar el sonido? ¿Deseas eschar el
        sonido? ¿Deseas eschar el sonido?
      </p>
    </Dialog>
  );
}
