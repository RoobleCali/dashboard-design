import "../../App";
import sun from "./img/sun.png";
import moon from "./img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "./Context";

const DarkTheme = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <img src={sun} alt="" className="toggle-icon" />
      <img src={moon} alt="" className="toggle-icon" />

      <div
        className="toggle-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default DarkTheme;
