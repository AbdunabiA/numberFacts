import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import DateFact from './pages/DateFact';
import MathFact from './pages/MathFact';
import { RandomFact } from './pages/RandomFact';
import YearFact from './pages/YearFact';
import Entry from './pages/Entry';
import ErrorElement from './components/ErrorElement';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorElement/>}>
      <Route index element={<Entry />} />
      <Route path="datefacts" element={<DateFact />} />
      <Route path="mathfacts" element={<MathFact />} />
      <Route path="randomfacts" element={<RandomFact />} />
      <Route path="yearfacts" element={<YearFact />} />
    </Route>
  )
);



function App() {
  

  return <RouterProvider router={router} />
}

export default App
