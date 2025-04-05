import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";

export function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="w-screen p-5">
      <div className="container mx-auto flex justify-between lg:justify-center items-center">
        <div className="lg:w-60 xl:w-80 font-monteCarlo text-5xl text-primary lg:text-5xl">
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
            <span className="flex justify-between items-center p-5">
              <span className="font-monteCarlo text-5xl text-primary">
                {import.meta.env.VITE_FIRST_NAME}
              </span>
              <span>
                <Button
                  type="button"
                  ref={closeIconRef as React.Ref<Button>}
                  onClick={(e) => hide(e)}
                  icon="pi pi-times"
                  rounded
                  outlined
                ></Button>
              </span>
            </span>
          )}
        ></Sidebar>
      </div>
    </nav>
  );
}
