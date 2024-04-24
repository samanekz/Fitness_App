import "../App.css";
import Navbar from "../components/navbar";
import logo from "../image/logo.png";

function Home() {
  return (
    <div className="bg-fitness-dark h-lvh  text-white flex flex-col justify-between">
      <h1 className="text-4xl font-bold mt-20 ml-4">Hi Samaneh!</h1>
      <img className="mx-16" src={logo} />
      <div className="flex justify-between items-end mx-6 mt-4 mb-0">
        <h2 className="text-2xl font-bold">Dein Workout heute </h2>
        <p className="text-xs">Trainingsplan</p>
      </div>
      <div>
        <div className="bg-fitness-medium rounded-3xl pt-28 flex flex-col justify-end mx-7">
          <div className="flex flex-col items-start m-7">
            <h3 className="text-xl font-bold">Tag 2</h3>
            <h2 className="text-2xl font-bold">Titel des Programms</h2>
            <p className="text-xs">26 Min. · Beweglichkeit</p>
          </div>
        </div>
      </div>
      <div className="">
        <Navbar />
      </div>
    </div>
  );
}
export default Home;
