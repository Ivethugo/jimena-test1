import { useOpenningTime } from "../../store/openning_time/useOpenningTime";

export function Invitation() {
  const { invitation } = useOpenningTime();
  return <div>{invitation && <h1>Hola</h1>}</div>;
}
