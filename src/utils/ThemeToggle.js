import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-0 ease-in-out rounded-full">
      {theme === "dark" ? (
        <BiSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          size="30px"
          className=" fill-whiteIcons dark:fill-white"
        />
      ) : (
        <BiMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          size="30px"
          className="fill-whiteIcons dark:fill-white"
        />
      )}
    </div>
  );
};

export default Toggle;
