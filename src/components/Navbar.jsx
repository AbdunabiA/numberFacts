import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around w-full h-[10vh] shadow-lg text-white">
      <NavLink
        to="datefacts"
        className={(navData) =>
          navData.isActive
            ? "text-black font-bold relative border border-black md:py-2 md:px-6 rounded-md group overflow-hidden text-center"
            : "relative  md:py-2 md:px-6 rounded-md group overflow-hidden text-center"
        }
        end
      >
        <span className="absolute top-0 left-0 h-[5px] w-0 bg-[#c64cd8] group-hover:w-full duration-300"></span>
        <span className="absolute bottom-0 right-0 h-[5px] w-0 bg-gradient-to-r from-[#3ba0c5] to-[#2f86d2] group-hover:w-full duration-300"></span>
        <span className="absolute top-0 left-0 w-[5px] h-0 bg-[#c64cd8] group-hover:h-full duration-300"></span>
        <span className="absolute bottom-0 right-0 w-[5px] h-0 bg-gradient-to-r from-[#3b92c5] to-[#2f86d2] group-hover:h-full duration-300"></span>
        <span className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:w-full duration-700 delay-300"></span>
        <span className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:w-full duration-700 delay-300"></span>
        <span className="absolute top-0 right-0 w-full h-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:h-full duration-700 delay-300"></span>
        <span className="absolute bottom-0 right-0 w-full h-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:h-full duration-700 delay-300"></span>
        <span className="relative">Date Facts</span>
      </NavLink>
      <NavLink
        to="mathfacts"
        className={(navData) =>
          navData.isActive
            ? "text-black font-bold relative border border-black md:py-2 md:px-6 rounded-md group overflow-hidden text-center"
            : "relative  md:py-2 md:px-6 rounded-md group overflow-hidden text-center"
        }
        end
      >
        <span className="absolute top-0 left-0 h-[5px] w-0 bg-[#c64cd8] group-hover:w-full duration-300"></span>
        <span className="absolute bottom-0 right-0 h-[5px] w-0 bg-gradient-to-r from-[#3ba0c5] to-[#2f86d2] group-hover:w-full duration-300"></span>
        <span className="absolute top-0 left-0 w-[5px] h-0 bg-[#c64cd8] group-hover:h-full duration-300"></span>
        <span className="absolute bottom-0 right-0 w-[5px] h-0 bg-gradient-to-r from-[#3b92c5] to-[#2f86d2] group-hover:h-full duration-300"></span>
        <span className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:w-full duration-700 delay-300"></span>
        <span className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:w-full duration-700 delay-300"></span>
        <span className="absolute top-0 right-0 w-full h-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:h-full duration-700 delay-300"></span>
        <span className="absolute bottom-0 right-0 w-full h-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:h-full duration-700 delay-300"></span>
        <span className="relative">Math Facts</span>
      </NavLink>
      <NavLink
        to="randomfacts"
        className={(navData) =>
          navData.isActive
            ? "text-black font-bold relative border border-black md:py-2 md:px-6 rounded-md group overflow-hidden text-center"
            : "relative  md:py-2 md:px-6 rounded-md group overflow-hidden text-center"
        }
        end
      >
        <span className="absolute top-0 left-0 h-[5px] w-0 bg-[#c64cd8] group-hover:w-full duration-300"></span>
        <span className="absolute bottom-0 right-0 h-[5px] w-0 bg-gradient-to-r from-[#3ba0c5] to-[#2f86d2] group-hover:w-full duration-300"></span>
        <span className="absolute top-0 left-0 w-[5px] h-0 bg-[#c64cd8] group-hover:h-full duration-300"></span>
        <span className="absolute bottom-0 right-0 w-[5px] h-0 bg-gradient-to-r from-[#3b92c5] to-[#2f86d2] group-hover:h-full duration-300"></span>
        <span className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:w-full duration-700 delay-300"></span>
        <span className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:w-full duration-700 delay-300"></span>
        <span className="absolute top-0 right-0 w-full h-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:h-full duration-700 delay-300"></span>
        <span className="absolute bottom-0 right-0 w-full h-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:h-full duration-700 delay-300"></span>
        <span className="relative">Random Facts</span>
      </NavLink>
      <NavLink
        to="yearfacts"
        className={(navData) =>
          navData.isActive
            ? "text-black font-bold relative border border-black md:py-2 md:px-6 rounded-md group overflow-hidden text-center"
            : "relative  md:py-2 md:px-6 rounded-md group overflow-hidden text-center"
        }
        end
      >
        <span className="absolute top-0 left-0 h-[5px] w-0 bg-[#c64cd8] group-hover:w-full duration-300"></span>
        <span className="absolute bottom-0 right-0 h-[5px] w-0 bg-gradient-to-r from-[#3ba0c5] to-[#2f86d2] group-hover:w-full duration-300"></span>
        <span className="absolute top-0 left-0 w-[5px] h-0 bg-[#c64cd8] group-hover:h-full duration-300"></span>
        <span className="absolute bottom-0 right-0 w-[5px] h-0 bg-gradient-to-r from-[#3b92c5] to-[#2f86d2] group-hover:h-full duration-300"></span>
        <span className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:w-full duration-700 delay-300"></span>
        <span className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:w-full duration-700 delay-300"></span>
        <span className="absolute top-0 right-0 w-full h-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:h-full duration-700 delay-300"></span>
        <span className="absolute bottom-0 right-0 w-full h-0 bg-gradient-to-r from-[#a33bc5] to-[#2f86d2] group-hover:h-full duration-700 delay-300"></span>
        <span className="relative">Year Facts</span>
      </NavLink>
    </nav>
  );
}

export default Navbar