import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Obtiene la cadena de consulta completa (incluye el signo '?')
    const query = window.location.search;
    console.log("Query String:", query);

    // Convierte la cadena de consulta en un objeto más manejable
    const params = new URLSearchParams(query);
    const paramValue = params.get("nombre"); // Cambia 'miParametro' por el nombre del parámetro
    console.log("Valor del parámetro:", paramValue);
  }, []);

  return <>Hola hugo</>;
}

export default App;
