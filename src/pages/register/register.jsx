import "../../App.css";
import logo from "../../image/logo.png";

import BtnPrimary from "../../components/btnPrimary";

function Register() {
  return (
    <>
      <div className="bg-fitness-dark h-lvh  text-white flex flex-col">
        <img className="mt-24" src={logo} />
        <div className="flex flex-col items-center text-base mt-36">
          <BtnPrimary>registrieren</BtnPrimary>
          <a className="font-family:Roboto mt-4 " href="">
            oder anmelden
          </a>
        </div>
      </div>
    </>
  );
}
export default Register;
