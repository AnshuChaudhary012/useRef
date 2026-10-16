import { useRef } from "react";

export default function AutoFocus() {
  const focusRef = useRef();

  function focusInput() {
    focusRef.current.focus();
  }

  return (
    <div className="flex justify-center py-3 gap-2">
      <input
        ref={focusRef}
        className="w-45 px-2 py-1  rounded-3xl bg-blue-300"
        type="text"
      />
      <button
        type="button"
        onClick={focusInput}
        className="text-lg hover:bg-amber-200 rounded-2xl bg-blue-400 px-3 py-1 cursor-pointer"
      >
        Input Focus
      </button>
    </div>
  );
}
