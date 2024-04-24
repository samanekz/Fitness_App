import "../../App.css";

import BtnPrimary from "../../components/btnPrimary";

function registerSex() {
  return (
    <div className="bg-fitness-dark h-lvh  text-white flex flex-col items-center">
      <p className="h-24 flex-initial text-center mt-64">
        Wunderbar Name, Verrätst du uns <br />
        noch dein Geschlecht?
      </p>
      <input
        type="text"
        name="woman"
        className="bg-fitness-medium w-64 rounded-3xl py-1.5 pl-7 pr-20 text-white placeholder:text-white"
        placeholder="weiblich"
      ></input>
      <input
        type="text"
        name="man"
        className="bg-fitness-medium w-64 mt-2 rounded-3xl py-1.5 pl-7 pr-20 text-white placeholder:text-white"
        placeholder="mänlich"
      ></input>

      <p className="text-center mt-10">
        Mit den Angaben berechnen wir <br /> Deinen BMI und Deinen <br />
        Kalorienverbrauch.
      </p>
      <BtnPrimary>weiter</BtnPrimary>
    </div>
  );
}

export default registerSex;
