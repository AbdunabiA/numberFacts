import React, { useState } from "react";
import axios from "axios";
import ErrorElement from "../components/ErrorElement";

export const RandomFact = () => {

    const [type, setType] = useState('math');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const options = {
      method: "GET",
      url: `https://numbersapi.p.rapidapi.com/random/${type}`,
      params: { min: "10", max: "20", fragment: "true", json: "true" },
      headers: {
        "X-RapidAPI-Key": "bf6857a44emshc592342b17fe996p146e36jsnf1d9996e2518",
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      },
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      axios
        .request(options)
        .then(function (response) {
          
          setData(response.data);
          setError("");
        })
        .catch(function (error) {
          
          setError(error.message);
          setIsLoading(false);
        });
      setIsLoading(false);
    };

  return (
    <div className="w-full h-[90vh] overflow-y-scroll sm:overflow-auto">
      <div className="mx-auto mt-10 w-[90%] sm:w-[70%] lg:w-[50%]">
        <p className="text-md text-center text-white shadow-md p-5 rounded-md">
          Here you can find random facts related to math or year.
        </p>
      </div>
      <div className="flex  items-center justify-center mt-10">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center space-y-5 px-10 py-5 sm:px-20 sm:py-10 rounded-lg shadow-lg"
        >
            <label htmlFor="sel" className="text-white">Choose the type  of fact</label>
          <select
            value={type}
            onChange={(e) => {
                setData('')
                return setType(e.target.value)}}
            name="sel"
            id="sel"
            required
            className="py-2 px-6 rounded-md bg-blue-500 focus:outline-none text-white"
          >
            <option value="math">Math</option>
            <option value="year">Year</option>
          </select>
          <button className="text-white px-10 py-2 rounded shadow-md bg-blue-500 group relative overflow-hidden">
            <span className="absolute top-0 left-0 w-0 h-full bg-[#af4bc8fc] group-hover:w-full duration-100"></span>
            <span className="absolute top-0 left-0 w-0 h-full bg-blue-500 group-hover:w-full duration-200 delay-75"></span>
            <span className="absolute top-0 left-0 w-0 h-full bg-[#af4bc8fc] group-hover:w-full duration-200 delay-150"></span>
            <span className="absolute top-0 left-0 w-0 h-full bg-blue-500 group-hover:w-full duration-200 delay-200"></span>
            <span className="absolute top-0 left-0 w-0 h-full bg-[#af4bc8fc]       group-hover:w-full duration-300 delay-300"></span>
            <span className="relative">Send</span>
          </button>
        </form>
      </div>
      <div className="mt-10 w-[90%] sm:[70%] lg:w-[40%] text-white text-center mx-auto shadow-md p-5 rounded-md">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <ErrorElement error={error} />
        ) : (
          data && (
            <p>
              {type === "math" ? (
                <span>
                  {data.number} is {data.text}
                </span>
              ) : (
                <span>
                  In {data.number} {data.text}
                </span>
              )}
            </p>
          )
        )}
      </div>
    </div>
  );
}
