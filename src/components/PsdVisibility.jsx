import { useRef } from "react";

export default function Component() {
  const passRef = useRef();

  function any() {
    passRef.current.type =
      passRef.current.type === "password" ? "text" : "password";
  }

  return (
    <div className="flex justify-center gap-3">
      <input
        ref={passRef}
        className="w-45 px-2 py-0.5  rounded-3xl bg-blue-300"
        type="text"
      />
      <button
        onClick={any}
        className="text-lg rounded-2xl bg-blue-400 px-3 py-1 cursor-pointer"
      >
        {/* {passRef.current.type === "password" ? "Show" : "Hide"} */}

        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg>
      
      </button>
    </div>
  );
}
