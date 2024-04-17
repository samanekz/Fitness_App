import "./App.css";
import Navbar from "./components/navbar";
import logo from "./image/logo.png";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("Samaneh");
  return (
    <div className="bg-fitness-dark h-lvh  text-white flex flex-col justify-between">
      <h1 className="text-4xl font-bold mt-10 ml-4">Hi {userName}!</h1>
      <img className="mx-16" src={logo} />
      <div className="flex justify-between items-end mx-4 mt-4 mb-0">
        <h2 className="text-2xl font-bold">Dein Workout heute </h2>
        <p className="text-xs">Trainingsplan</p>
      </div>
      <div>
        <button className="bg-fitness-medium rounded-3xl h-56 w-96 flex flex-col justify-end ml-4">
          <div className="flex flex-col items-start m-7">
            <h3 className="text-xl font-bold">Tag 2</h3>
            <h2 className="text-2xl font-bold">Titel des Programms</h2>
            <p className="text-xs">26 Min. · Beweglichkeit</p>
          </div>
        </button>
      </div>
      <div className="">
        <Navbar />
      </div>
    </div>
  );
}
export default App;
