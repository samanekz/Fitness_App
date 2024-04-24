import "../../App.css";

import BtnPrimary from "../../components/btnPrimary";

function registerFit() {
  return (
    <div className="bg-fitness-dark h-lvh  text-white flex flex-col items-center">
      <p className="h-24 flex-initial text-center mt-60">Wie fit bist du? </p>
      <input
        type="text"
        name="no-fit"
        className="bg-fitness-medium w-64 rounded-3xl py-1.5 pl-7 pr-20 text-white placeholder:text-white"
        placeholder="Nicht so fit "
      ></input>
      <input
        type="text"
        name="good-fit"
        className="bg-fitness-medium w-64 mt-2 rounded-3xl py-1.5 pl-7 pr-20 text-white placeholder:text-white"
        placeholder="Relativ fit"
      ></input>
      <input
        type="text"
        name="super-fit"
        className="bg-fitness-medium w-64 mt-2 rounded-3xl py-1.5 pl-7 pr-20 text-white placeholder:text-white"
        placeholder="Super fit"
      ></input>
      <p className="text-center mt-10">
        Keine Sorge, du kannst dein <br />
        Trainingsziel jederzeit ändern
      </p>
      <BtnPrimary>weiter</BtnPrimary>
    </div>
  );
}

export default registerFit;
