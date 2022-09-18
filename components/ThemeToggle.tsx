import React, { useContext } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from "../utils/ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

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
