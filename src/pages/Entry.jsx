import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const Entry = () => {
  const [nav, setNav] = useState(false)
  

  return ( nav?<Navigate replace to="/datefacts"/>:
    <div className="w-full h-screen bg-gradient-to-tr from-[#4776E6] to-[#8E54E9] flex items-center justify-center absolute top-0 left-0">
      <div className="shadow-xl border border-black/5 backdrop-blur-xl text-center text-white p-10 rounded-md">
        <h1 className="text-4xl font-bold my-5">Number Facts</h1>
        <p>
          Hello! This is a small number facts web app, <br />
          where you can get date, math, random or year facts. <br />
          Click the button to continue.
        </p>
        <button
          onClick={() => setNav(true)}
          className="mt-5 text-lg px-6 py-2 font-bold bg-gradient-to-r from-[#8E54E9] to-[#4776E6] rounded-md shadow-md relative group overflow-hidden"
        >
          <span
            className="absolute top-0 left-0 h-full w-0 bg-gradient-to-l from-[#8E54E9] to-[#4776E6] group-hover:w-full 
          duration-1000"
          ></span>
          <span className="relative">Continue</span>
        </button>
      </div>
    </div>
  );
}

export default Entry