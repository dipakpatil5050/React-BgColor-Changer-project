import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300 bg-red-900"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="justify-center flex flex-wrap shadow-lg bg-white px-3 py-3 rounded-3xl gap-3">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-4 font-bold rounded-full text-black shadow-lg "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-4 font-bold rounded-full text-black shadow-lg "
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-4 font-bold rounded-full text-black shadow-lg "
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-4 font-bold rounded-full text-black shadow-lg "
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("cyan")}
            className="outline-none px-4 py-4 font-bold rounded-full text-black shadow-lg "
            style={{ backgroundColor: "cyan" }}
          >
            cyan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
