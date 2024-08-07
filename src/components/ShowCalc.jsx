import { multiply, devision } from "../utils/UsefulFunction";

function ShowCalc() {
  const a = 6;
  const b = 6;
  return (
    <>
      <h1>{multiply(a, b)}</h1>
      <h1>{devision(a, b)}</h1>
    </>
  );
}
export default ShowCalc;
