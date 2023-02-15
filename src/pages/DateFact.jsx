import React from 'react'
import { useState } from 'react';
import axios from "axios";
import ErrorElement from '../components/ErrorElement';


const DateFact = () => {

    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [date, setDate] = useState({})

    const options = {
      method: "GET",
      url: `https://numbersapi.p.rapidapi.com/${month}/${day}/date`,
      params: { fragment: "true", json: "true" },
      headers: {
        "X-RapidAPI-Key": "bf6857a44emshc592342b17fe996p146e36jsnf1d9996e2518",
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      },
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)  
        axios
          .request(options)
          .then(function (response) {
            if (month > 12 || month < 1) {
              throw Error("Month should be between 1 and 12");
            }else if(day<1 || day>31){
              throw Error("Day should be between 1 and 31");  
            }
            
            setData(response.data);
            setError('')
          })
          .catch(function (error) {
            
            setError(error.message);
            setIsLoading(false);
          });

          setDate({day, month})
          setDay('')
          setMonth('')
          setIsLoading(false)
    }
    

  return (
    <div className="w-full h-[90vh] overflow-y-scroll sm:overflow-auto">
      <div className="mx-auto mt-10 w-[90%] sm:w-[70%] lg:w-[50%]">
        <p className="text-md text-center text-white shadow-md p-5 rounded-md">
          In this page you can get facts related to dates. You are only
          allowed to write a month and a day in numbers: month(1-12) days(1-31). Let's find out what happened on your date of birth.
        </p>
      </div>
      <div className="flex  items-center justify-center mt-10">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center space-y-5 px-10 py-5 sm:px-20 sm:py-10 rounded-lg shadow-lg"
        >
          <input
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="p-1 focus:outline-none rounded-md"
            type="number"
            placeholder="Month..."
            required
          />
          <input
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="p-1 focus:outline-none rounded-md"
            type="number"
            placeholder="Day..."
            required
          />
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
              On {date.day} {date.month} {data.year}, {data.text}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default DateFact