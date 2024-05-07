import "../App.css";
import Navbar from "../components/navbar";

function excercise() {
  return (
    <div className="bg-fitness-dark h-lvh  text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold	mt-56">Glückwunsch!</h1>
      <h3>
        Du hast 3 Tage <br />
        am Stück trainiert!
      </h3>
      <p>Wie war das Workout?</p>
      <div>
        <a href="#">zu leicht</a>
        <a href="#">zu leicht</a>
        <a href="#">zu leicht</a>
      </div>
      <Navbar />
    </div>
  );
}

export default excercise;
