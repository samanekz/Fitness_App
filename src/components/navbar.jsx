import home from "../icon/home.png";
import programm from "../icon/programm.png";
import profile from "../icon/profile.png";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center bg-black h-12 w-svh">
      <div>
        <img className="" src={home} alt="home" />
      </div>
      <div>
        <img className="" src={programm} alt="programm" />
      </div>
      <div>
        <img className="" src={profile} alt="profile" />
      </div>
    </nav>
  );
};

export default Navbar;
