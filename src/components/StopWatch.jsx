import { useState, useRef } from "react";

export default function StopWatch() {
  const [number, setNumber] = useState(0);
  const timeRef = useRef();
  let start = () => {
    timeRef.current = setInterval(() => {
      setNumber((number) => number + 1);
    }, 100);
  };
  let pause = () => {
    clearInterval(timeRef.current);
  };
  let restart = () => {
    clearInterval(timeRef.current);
    setNumber(0);
  };
  return (
    <div className="p-5 max-w-100 mx-auto">
      <h1 className="text-center text-3xl">StopWatch</h1>
      <h2 ref={timeRef} className="text-center text-2xl">
        {number}
      </h2>
      <div className="flex w-full justify-center gap-2">
        <button
          onClick={start}
          className="text-lg rounded-2xl bg-blue-400  px-3 py-2 cursor-pointer"
        >
          Start
        </button>
        <button
          onClick={pause}
          className="text-lg rounded-2xl bg-blue-400  px-3 py-2 cursor-pointer"
        >
          Pause
        </button>
        <button
          onClick={restart}
          className="text-lg  rounded-2xl bg-blue-400 px-3 py-2 cursor-pointer"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
