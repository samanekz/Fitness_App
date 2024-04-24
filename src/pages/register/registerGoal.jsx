import "../../App.css";

import BtnPrimary from "../../components/btnPrimary";

function registerGoal() {
  return (
    <div className="bg-fitness-dark h-lvh  text-white flex flex-col items-center">
      <p className="h-24 flex-initial text-center mt-60">
        Was ist dein Trainingsziel?
      </p>
      <input
        type="text"
        name="training"
        className="bg-fitness-medium w-64 rounded-3xl py-1.5 pl-7 pr-20 text-white placeholder:text-white"
        placeholder="Beweglichkeit"
      ></input>
      <input
        type="text"
        name="looseWeight"
        className="bg-fitness-medium w-64 mt-2 rounded-3xl py-1.5 pl-7 pr-20 text-white placeholder:text-white"
        placeholder="Abnehmen"
      ></input>
      <input
        type="text"
        name="muscle"
        className="bg-fitness-medium w-64 mt-2 rounded-3xl py-1.5 pl-7 pr-20 text-white placeholder:text-white"
        placeholder="Muskelaufbau"
      ></input>
      <p className="text-center mt-10">
        Keine Sorge, du kannst dein <br /> Trainingsziel jederzeit ändern
      </p>
      <BtnPrimary>weiter</BtnPrimary>
    </div>
  );
}

export default registerGoal;
