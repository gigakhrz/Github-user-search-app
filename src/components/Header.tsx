import TheSun from "../assets/icon-sun.svg";
import ThemeMoon from "../assets/icon-moon.svg";

interface HeaderProps {
  blacktheme: Boolean;
  setblackTheme: (blacktheme: boolean) => void;
}

const Header = ({ blacktheme, setblackTheme }: HeaderProps): JSX.Element => {
  const ChangeTheme = () => {
    setblackTheme(!blacktheme);
  };

  return (
    <div className=" flex justify-between w-full md:max-w-[573px] md:mt-[140px]">
      <h1 className={`${blacktheme ? "text-[#fff]" : "text-[#222731]"}`}>
        devfinder
      </h1>
      <div className={` flex gap-4 items-center`}>
        <h3
          className={`text-[13px] font-bold leading-[19px] tracking-[2px] uppercase ${
            blacktheme ? "text-[#fff]" : "text-[#4B6A9B]"
          }`}
        >
          {blacktheme ? "light" : "dark"}
        </h3>
        <img
          className="w-5 h-5"
          onClick={ChangeTheme}
          src={blacktheme ? TheSun : ThemeMoon}
          alt="Theme changer photo"
        />
      </div>
    </div>
  );
};

export default Header;
