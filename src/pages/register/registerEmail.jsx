import "../../App.css";

import BtnPrimary from "../../components/btnPrimary";

function registerName() {
  return (
    <div className="bg-fitness-dark h-lvh  text-white flex flex-col items-center">
      <p className="h-24 flex-initial text-center mt-64">
        Name, malde dich jetzt an und <br /> starte gemeinsam mit uns in dein
        <br /> fitteres und gesünderes Leben!
      </p>
      <input
        type="email"
        name="email"
        className="bg-fitness-dark flex-initial mt-4  border-x-fitness-dlight rounded-md border py-1.5 pl-7 pr-20 text-white placeholder:text-white"
        placeholder="Deine Email Adresse"
      ></input>
      <input
        type="password"
        name="password"
        className="bg-fitness-dark flex-initial mt-4  border-x-fitness-dlight rounded-md border py-1.5 pl-7 pr-20 text-white placeholder:text-white"
        placeholder="Dein Passwort"
      ></input>
      <BtnPrimary>registrieren</BtnPrimary>
    </div>
  );
}

export default registerName;
