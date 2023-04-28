import TheSun from "../assets/icon-sun.svg";
import ThemeMoon from "../assets/icon-moon.svg";

interface Ragaca {
  blacktheme: Boolean;
  setblackTheme: (blacktheme: boolean) => void;
}

const Header = ({ blacktheme, setblackTheme }: Ragaca): JSX.Element => {
  const ChangeTheme = () => {
    setblackTheme(!blacktheme);
  };

  return (
    <div>
      <h1>devfinder</h1>
      <div>
        <h3>{blacktheme ? "light" : "dark"}</h3>
        <img
          onClick={ChangeTheme}
          src={blacktheme ? TheSun : ThemeMoon}
          alt="Theme changer photo"
        />
      </div>
    </div>
  );
};

export default Header;
