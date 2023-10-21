import { useState } from "react";

const ToogleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkTheme ? "light" : "dark"
    );
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkTheme ? <>{"☾"}</> : <> {"☼"}</>}
    </button>
  );
};

export default ToogleTheme;
