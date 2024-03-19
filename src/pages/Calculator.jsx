import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <input
            className="text-3xl p-4 rounded font-bold tracking-tight border w-full text-gray-900 sm:text-4xl"
            readOnly
            type="button"
            value={value}
          />
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto flex items-center justify-center">
            <div
              role="list"
              className="mt-8 grid grid-cols-4 gap-4 text-lg leading-6 text-gray-600 sm:grid-cols-4 sm:gap-6"
            >
              <input
                type="button"
                onClick={(e) => setValue("")}
                value="AC"
                className="flex gap-x-3 bg-red-500 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />
              <input
                type="button"
                value="DEL"
                onClick={(e) => setValue(value.slice(0, -1))}
                className="flex gap-x-3 bg-red-500 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />
              <input
                type="button"
                value="C"
                className="flex gap-x-3 bg-red-500 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="+"
                className="flex gap-x-3 bg-yellow-500 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="7"
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="8"
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="9"
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="-"
                className="flex gap-x-3 bg-yellow-500 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="4"
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="5"
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="6"
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="*"
                className="flex gap-x-3 bg-yellow-500 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="1"
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="2"
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="3"
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="/"
                className="flex gap-x-3 bg-yellow-500 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="0"
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="00"
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                value="."
                className="flex gap-x-3 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />

              <input
                type="button"
                onClick={(e) => setValue(eval(value))}
                value="="
                className="flex gap-x-3 bg-yellow-500 cursor-pointer flex-wrap border p-6 w-10 h-10 sm:w-20 sm:h-20  hover:text-blue-300 justify-center items-center rounded-full sm:rounded text-white bg-blue-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
