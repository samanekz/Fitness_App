import "../../App.css";

import BtnPrimary from "../../components/btnPrimary";

function registerName() {
  return (
    <div className="bg-fitness-dark h-lvh text-white flex flex-col items-center">
      <p className="h-24 flex-initial text-center mt-72">
        Schön dass du dabei bist! <br />
        Wie heißt du?
      </p>
      <input
        type="text"
        name="name"
        className="bg-fitness-dark flex-initial mt-4  border-x-fitness-dlight rounded-md border py-1.5 pl-3 pr-6 text-white placeholder:text-white"
        placeholder="Dein Name"
      ></input>
      <BtnPrimary>weiter</BtnPrimary>
    </div>
  );
}

export default registerName;
