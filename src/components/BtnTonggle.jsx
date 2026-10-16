import { useRef } from "react";

export default function BtnTonggle() {
  const colorRef = useRef();

  function changeColor() {
    colorRef.current.classList.toggle("bg-blue-400");
    colorRef.current.classList.toggle("bg-red-400");
  } 
  return (
    <div className="w-fit mx-auto gap-3 flex">
      <button
        onClick={changeColor}
        className="text-lg rounded-2xl bg-blue-400 px-3 py-2 cursor-pointer"
      >
        Change color
      </button>
      <button
        ref={colorRef}
        className="text-lg rounded-2xl bg-blue-400 px-3 py-2 cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
}
