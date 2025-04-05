/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useAudio } from "../../store/audio/useAudio.ts";

type NewModalProps = {
  time: number;
  onConfirm?: () => void;
};
export function NewModal({ time, onConfirm }: NewModalProps) {
  const [visible, setVisible] = useState(false);
  const { setAudio } = useAudio();

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
        onClick={() => {
          setVisible(false);
          onConfirm?.();
        }}
      />
      <Button
        label="Yes"
        severity="help"
        outlined
        onClick={() => {
          setVisible(false);
          setAudio(true);
          onConfirm?.();
        }}
      />
    </div>
  );

  return (
    <Dialog
      closable={false}
      header="Confirmación"
      visible={visible}
      style={{ width: "80vw" }}
      breakpoints={{ "960px": "45vw", "641px": "80vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      footer={footerContent}
    >
      <p className="m-0">¿Deseas escuchar el sonido?</p>
    </Dialog>
  );
}
